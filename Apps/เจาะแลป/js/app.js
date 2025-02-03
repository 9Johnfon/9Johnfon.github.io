const tests = document.querySelectorAll('.test');
const bottlesDiv = document.getElementById('bottles');
const detailsDiv = document.getElementById('details');
const resetBtn = document.getElementById('reset');
let selectedTests = [];

const bottleMapping = {
    Biggray: { color: 'เทาใหญ่', label: 'Hemoculture', icon: './imgs/Biggray.png', description: 'สำหรับตรวจเพาะเชื้อในกระแสเลือด<br>ปริมาณที่ใช้ : 5 - 10 ml<br>วิธีการเก็บ : เขียนระบุที่ขวด Ex ขวดที่ 1, ขวดที่ 2 <br>   * เก็บเลือดแต่ละขวดห่วงกันอย่างน้อย 30 นาที' },
    blue: { color: 'ฟ้า', label: 'Sodium citrate', icon: './imgs/blue.png', description: 'เป็นสารป้องกันการแข็งตัวของเลือดโดยจะจับกับ Ca แต่ไม่กระตุ้นการทำงานของเกล็ดเลือด<br>ปริมาณที่ใช้ : 3 - 4 ml<br>เหมาะสำหรับการตรวจ Conagulation factor' },
    yellow: { color: 'เหลือง', label: 'Gel & Clot activator', icon: './imgs/yellow.png', description: 'ช่วยเร่งการแข็งตัวของเลือด และมี Gel ช่วยแยกเม็ดเลือดแดงออกจาก Serum หลังการปั่น<br>ปริมาณที่ใช้ : 3 - 4 ml' },
    red: { color: 'แดง', label: 'Clotted blood', icon: './imgs/red.png', description: 'ไม่มีสารใดๆ เหมาะสำหรับการส่งตรวจทาง ภูมิคุ้มกันวิทยา, เคมีคลินิก<br>ปริมาณที่ใช้ : 3 - 4 ml<br>   * เด็กแรกเกิดเจาะเลือดได้น้อย ใช้ Micro clotted blood tube<br>ปริมาณที่ใช้ : 0.5 ml' },
    green: { color: 'เขียว', label: 'Lithium heparin', icon: './imgs/green.png', description: 'Heparin เป็นสารป้องกันการแข็งตัวของเลือด เหมาะสำหรับตรวจทางเคมีบำบัด<br>ปริมาณที่ใช้ : 3 - 4 ml<br>   * เด็กแรกเกิดเจาะเลือดได้น้อย ใช้ Micro lithium heparin tube<br>ปริมาณที่ใช้ : 0.5 ml' },
    purple: { color: 'ม่วง', label: 'EDTA', icon: './imgs/purple.png', description: 'เป็นสารป้องกันการแข็งตัวของเลือด เหมาะสำหรับตรวจโลหิตวิทยา<br>ปริมาณที่ใช้ : 3 - 4 ml<br>   * เด็กแรกเกิดเจาะเลือดได้น้อย ใช้ Micro EDTA tube<br>ปริมาณที่ใช้ : 0.5 ml' },
    gray: { color: 'เทา', label: 'NaF', icon: './imgs/gray.png', description: 'เป็นสารป้องกันการใช้นํ้าตาลในเลือด<br>ปริมาณที่ใช้ : 2 - 3 ml' }
};

const testGroupDetails = {
    Biggray: ['Hemoculture'],
    blue: ['PT', 'INR', 'PTT', 'Thrombin time'],
    yellow: ['Coagulation factor'],
    red: ['Blood group', 'Tumor marker', 'TFT', 'Viral load'],
    green: ['Lipid profiled', 'Liver function test', 'BUN', 'Creatinine', 'Electrolyte (Na, Cl, K, HCO3)'],
    purple: ['CBC', 'HbA1C'],
    gray: ['FBS', 'Blood alcohol']
};

// Predefined order of bottles
const bottleOrder = ['Biggray', 'blue', 'yellow', 'red', 'green', 'purple', 'gray'];

tests.forEach(button => {
    button.addEventListener('click', () => {
        const testName = button.textContent;
        const bottle = button.getAttribute('data-bottle');
        if (!selectedTests.find(t => t.name === testName)) {
            button.classList.add('selected');
            selectedTests.push({ name: testName, bottle: bottle });
        } else {
            button.classList.remove('selected');
            selectedTests = selectedTests.filter(t => t.name !== testName);
        }
        updateDisplay();
    });
});

resetBtn.addEventListener('click', () => {
    selectedTests = [];
    tests.forEach(button => button.classList.remove('selected'));
    updateDisplay();
});

function updateDisplay() {
    bottlesDiv.innerHTML = '';
    detailsDiv.innerHTML = '';

    // Collect used bottles and sort them according to the predefined order
    const usedBottles = Array.from(new Set(selectedTests.map(test => test.bottle)))
        .sort((a, b) => bottleOrder.indexOf(a) - bottleOrder.indexOf(b));

    usedBottles.forEach(bottle => {
        // Create bottle element
        const bottleElement = document.createElement('div');
        bottleElement.classList.add('bottle');
        bottleElement.innerHTML = `
            <img src="${bottleMapping[bottle].icon}" alt="${bottleMapping[bottle].color}">
            <p>${bottleMapping[bottle].color}</p>
        `;
        bottlesDiv.appendChild(bottleElement);

        // Create detail element
        const detailElement = document.createElement('div');
        detailElement.classList.add('detail');
        detailElement.innerHTML = `
        <img src="${bottleMapping[bottle].icon}" alt="${bottleMapping[bottle].color}" width='70' height='auto'>
        <strong>${bottleMapping[bottle].label}</strong><br>${bottleMapping[bottle].description}<br><t style="color:#f54242">ใช้ตรวจ : </t>`;

        const testsInGroup = testGroupDetails[bottle].map(test => {
            return selectedTests.some(t => t.name === test)
                ? `<span class="highlight">${test}</span>`
                : test;
        });

        detailElement.innerHTML += testsInGroup.join(', ');
        detailsDiv.appendChild(detailElement);
    });

    // Show or hide the reset button based on selection
    resetBtn.style.display = selectedTests.length >= 1 ? 'inline-block' : 'none';
}

// Initialize reset button visibility
resetBtn.style.display = 'none';
