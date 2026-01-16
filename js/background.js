/**
 * Deformable Grid Background (Physics Fabric)
 * A custom physics simulation using HTML5 Canvas.
 * Simulates a grid of points connected by springs/constraints.
 */

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;

// Configuration
const GRID_SPACING = 50;  // Spacing between points
const MOUSE_RADIUS = 200; // Radius of mouse influence
const MOUSE_FORCE = 0.5;  // Strength of mouse push
const DAMPING = 0.9;      // Friction (0.9 = sticky, 0.98 = slippery)
const STIFFNESS = 0.02;   // Spring stiffness (return to original position)

let points = [];

// Mouse State
let mouse = { x: -1000, y: -1000 };

class Point {
    constructor(x, y) {
        this.x = x;          // Current position
        this.y = y;
        this.ox = x;         // Original position (rest position)
        this.oy = y;
        this.vx = 0;         // Velocity
        this.vy = 0;
    }

    update() {
        // 1. Return to original position (Spring force)
        const dx = this.ox - this.x;
        const dy = this.oy - this.y;

        this.vx += dx * STIFFNESS;
        this.vy += dy * STIFFNESS;

        // 2. Mouse Interaction (Repulsion)
        const dmx = mouse.x - this.x;
        const dmy = mouse.y - this.y;
        const dist = Math.sqrt(dmx * dmx + dmy * dmy);

        if (dist < MOUSE_RADIUS) {
            const angle = Math.atan2(dmy, dmx);
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            const push = -force * MOUSE_FORCE * 50; // Negative for repulsion

            this.vx += Math.cos(angle) * push;
            this.vy += Math.sin(angle) * push;
        }

        // 3. Apply physics
        this.vx *= DAMPING;
        this.vy *= DAMPING;

        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        // Draw point (subtle dot)
        // ctx.fillStyle = '#ccc';
        // ctx.fillRect(this.x - 1, this.y - 1, 2, 2);
    }
}

function init() {
    resize();
    createGrid();
}

function createGrid() {
    points = [];
    const cols = Math.ceil(width / GRID_SPACING) + 2;
    const rows = Math.ceil(height / GRID_SPACING) + 2;

    // Start slightly off-screen
    const startX = -GRID_SPACING;
    const startY = -GRID_SPACING;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            points.push(new Point(startX + j * GRID_SPACING, startY + i * GRID_SPACING));
        }
    }
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createGrid(); // Recreate grid on resize to fill screen
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update all points first
    points.forEach(p => p.update());

    // Draw Grid Lines
    ctx.beginPath();
    // Read color from CSS variable for dynamic theming
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--grid-color').trim();
    ctx.strokeStyle = gridColor || '#e5e5e5';
    ctx.lineWidth = 1;

    // We need to know connections. Since points are in a 1D array ordered by row/col:
    const cols = Math.ceil(width / GRID_SPACING) + 2;
    const rows = Math.ceil(height / GRID_SPACING) + 2;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const index = i * cols + j;
            const p = points[index];

            // Connect to right neighbor
            if (j < cols - 1) {
                const right = points[index + 1];
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(right.x, right.y);
            }

            // Connect to bottom neighbor
            if (i < rows - 1) {
                const bottom = points[index + cols];
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(bottom.x, bottom.y);
            }
        }
    }
    ctx.stroke();

    requestAnimationFrame(animate);
}

// Start
init();
animate();
