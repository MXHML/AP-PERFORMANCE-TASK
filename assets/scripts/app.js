const CPU = [
        {name:'AMD Ryzen 7 5800X',cores:8,base_clock:'3.8GHz',tdp:105,integrated_graphics:false,price:235.97},
        {name:'AMD Ryzen 5 5600X',cores:6,base_clock:'3.7GHz',tdp:65,integrated_graphics:false,price:167.00},
        {name:'Intel Core i9-13900K',cores:24,base_clock:'3GHz',tdp:125,integrated_graphics:true,price:594.99},
        {name:'Intel Core i9-12900K',cores:20,base_clock:'3.3GHz',tdp:125,integrated_graphics:true,price:499.99},
        {name:'Intel Core i7-11700KF',cores:12,base_clock:'3.6GHz',tdp:125,integrated_graphics:true,price:299.99},
        {name:'Intel Core i7-11700',cores:12,base_clock:'3.6GHz',tdp:125,integrated_graphics:true,price:299.99},
        {name:'Intel Core i7-10700KF',cores:16,base_clock:'3.8GHz',tdp:125,integrated_graphics:true,price:399.99},
        {name:'Intel Core i7-10700',cores:16,base_clock:'3.8GHz',tdp:125,integrated_graphics:true,price:399.99},
        {name:'Intel Core i5-13600K',cores:14,base_clock:'3.5GHz',tdp:125,integrated_graphics:true,price:319.88},
        {name:'AMD Ryzen 5 5600',cores:6,base_clock:'3.5GHz',tdp:65,integrated_graphics:false,price:139.79},
        {name:'Intel Core i7-12700K',cores:12,base_clock:'3.6GHz',tdp:125,integrated_graphics:true,price:298.94},
        {name:'AMD Ryzen 7 5800',cores:8,base_clock:'3.8GHz',tdp:105,integrated_graphics:false,price:199.99},
        {name:'Intel Core i9-11900K',cores:16,base_clock:'3.5GHz',tdp:125,integrated_graphics:true,price:499.99},
        {name:'Intel Core i5-11600K',cores:12,base_clock:'3.9GHz',tdp:125,integrated_graphics:true,price:249.99},
        {name:'Intel Core i7-11700K',cores:12,base_clock:'3.6GHz',tdp:125,integrated_graphics:true,price:299.99},
        {name:'Intel Core i9-10900K',cores:16,base_clock:'3.7GHz',tdp:125,integrated_graphics:true,price:499.99},
        {name:'Intel Core i7-10700K',cores:16,base_clock:'3.8GHz',tdp:125,integrated_graphics:true,price:399.99},
        {name:'Intel Core i5-10600K',cores:12,base_clock:'4.1GHz',tdp:125,integrated_graphics:true,price:249.99},
        {name:'AMD Ryzen 9 5950X',cores:16,base_clock:'3.4GHz',tdp:105,integrated_graphics:false,price:499.99},
        {name:'AMD Ryzen 9 5900X',cores:12,base_clock:'3.7GHz',tdp:105,integrated_graphics:false,price:449.99},
        {name:'AMD Ryzen 7 5700G',cores:8,base_clock:'3.8GHz',tdp:65,integrated_graphics:true,price:199.99},
        {name:'AMD Ryzen 7 5700',cores:8,base_clock:'3.8GHz',tdp:65,integrated_graphics:false,price:199.99},
        {name:'AMD Ryzen 5 5600G',cores:6,base_clock:'3.7GHz',tdp:65,integrated_graphics:true,price:169.99},
        {name:'AMD Ryzen 5 5600X',cores:6,base_clock:'3.7GHz',tdp:65,integrated_graphics:false,price:169.99},
        {name:'AMD Ryzen Threadripper 3990X',cores:64,base_clock:'2.9GHz',tdp:280,integrated_graphics:false,price:3999.99},
    ]
const GPU=[
            {name:'NVIDIA GeForce RTX 4080',memory:'32GB',memory_type:'GDDR6X',memory_clock:'19.5GHz',memory_bandwidth:'1248GB/s',tdp:350,price:1499.99},
            {name:'NVIDIA GeForce RTX 4070',memory:'16GB',memory_type:'GDDR6X',memory_clock:'19GHz',memory_bandwidth:'912GB/s',tdp:320,price:699.99},
            {name:'NVIDIA GeForce RTX 4060',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:220,price:499.99},
            {name:'NVIDIA GeForce RTX 3090',memory:'24GB',memory_type:'GDDR6X',memory_clock:'19.5GHz',memory_bandwidth:'936GB/s',tdp:350,price:1499.99},
            {name:'NVIDIA GeForce RTX 3080',memory:'10GB',memory_type:'GDDR6X',memory_clock:'19GHz',memory_bandwidth:'760GB/s',tdp:320,price:699.99},
            {name:'NVIDIA GeForce RTX 3070',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:220,price:499.99},
            {name:'NVIDIA GeForce RTX 3060 Ti',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:250,price:399.99},
            {name:'NVIDIA GeForce RTX 3060',memory:'12GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'672GB/s',tdp:170,price:329.99},
            {name:'NVIDIA GeForce RTX 2080 Ti',memory:'11GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'616GB/s',tdp:250,price:999.99},
            {name:'NVIDIA GeForce RTX 2080 Super',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:250,price:699.99},
            {name:'NVIDIA Founders Edition',memory:'24GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:215,price:499.99},
            {name:'NVIDIA GeForce RTX 2080',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:215,price:499.99},
            {name:'AMD Radeon RX 6900 XT',memory:'16GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'512GB/s',tdp:300,price:999.99},
            {name:'AMD Radeon RX 6800 XT',memory:'16GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'512GB/s',tdp:300,price:649.99},
            {name:'AMD Radeon RX 6800',memory:'16GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'512GB/s',tdp:300,price:579.99},
            {name:'AMD Radeon RX 6700 XT',memory:'12GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'384GB/s',tdp:250,price:479.99},
            {name:'AMD Radeon RX 6600 XT',memory:'12GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'384GB/s',tdp:250,price:379.99},
            {name:'AMD Radeon RX 6600',memory:'12GB',memory_type:'GDDR6',memory_clock:'16GHz',memory_bandwidth:'384GB/s',tdp:250,price:329.99},
            {name:'AMD Radeon RX 5700 XT',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:225,price:399.99},
            {name:'AMD Radeon RX 5700',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:225,price:349.99},
            {name:'AMD Radeon RX 5600 XT',memory:'6GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'336GB/s',tdp:225,price:279.99},
            {name:'AMD Radeon RX 5500 XT',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:120,price:199.99},
            {name:'AMD Radeon RX 5500',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:120,price:169.99},
            {name:'Asus ROG STRIX GAMING OC',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:215,price:499.99},
            {name:'MSI GAMING Z TRIO',memory:'8GB',memory_type:'GDDR6',memory_clock:'14GHz',memory_bandwidth:'448GB/s',tdp:215,price:499.99},
        ]
 const MOBO=[
            {name:'ASUS TUF GAMING X570-PLUS (Wi-Fi)', socket:'AM4',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'ASUS ROG STRIX X570-E GAMING', socket:'AM4',form_factor:'ATX',max_memory:128,memory_slots:4},

            {name:'MSI MAG B550 TOMAHAWK', socket:'AM4',form_factor:'ATX', max_memory:128, memory_slots:'4'},
            {name:'MSI B550M PRO-VDH WIFI', socket:'AM4',form_factor:'Micro ATX', max_memory:128, memory_slots:4},

            {name:'MSI B550-A PRO', socket:'AM4', form_factor:'ATX', max_memory:128, memory_slots:4},
            {name:'MSI B550M PRO-VDH', socket:'AM4', form_factor:'Micro ATX', max_memory:128, memory_slots:4},
            {name:'MSI B550M PRO-VDH WIFI', socket:'AM4', form_factor:'Micro ATX', max_memory:128, memory_slots:4},

            {name:'MSI MAG B660 TOMAHAWK', socket:'LGA1700', form_factor:'ATX', max_memory:128, memory_slots:4},
            {name:'Gigabyte B550M DS3H', socket:'AM4', form_factor:'Micro ATX', max_memory:128, memory_slots:4},
            {name:'Asus ROG STRIX Z690-A', socket:'LGA1700', form_factor:'ATX',max_memory:128,memory_slots:4},
            
            {name:'MSI B550M PRO-VDH', socket:'AM4',form_factor:'Micro ATX',max_memory:128,memory_slots:4},
            {name:'MSI B550M PRO-VDH WIFI', socket:'AM4',form_factor:'Micro ATX',max_memory:128,memory_slots:4},
            {name:'Asus TUF GAMING Z690-PLUS WIFI', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'Gigabyte TRX40 AORUS XTREME', socket:'TRX4',form_factor:'E-ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 AORUS MASTER', socket:'TRX4',form_factor:'E-ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 AORUS PRO', socket:'TRX4',form_factor:'ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 DESIGNARE', socket:'TRX4',form_factor:'E-ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 AORUS ELITE', socket:'TRX4',form_factor:'ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 AORUS ULTRA', socket:'TRX4',form_factor:'ATX',max_memory:128,memory_slots:8},
            {name:'Gigabyte TRX40 AORUS MASTER', socket:'TRX4',form_factor:'E-ATX',max_memory:128,memory_slots:8},
            {name:'NZXT N7 Z490', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'MSI MPG Z490 GAMING EDGE WIFI', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'MSI MPG Z490 GAMING PLUS', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'MSI MPG Z490 GAMING CARBON WIFI', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
            {name:'MSI MPG Z490 GAMING EDGE WIFI', socket:'LGA1700',form_factor:'ATX',max_memory:128,memory_slots:4},
        ]
  const MEM=[
            {name:'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Corsair Venegence RGB Pro 32GB (2x16GB) DDR4 3600MHz',speed:3600,price:199.99},
            {name:'G.Skill Trident Z Neo 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'G.Skill Ripjaws V 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'G.Skill Trident Z5 RGB 64GB (4x16GB) DDR4 3600MHz',speed:3600,price:399.99},
            {name:'Kingston HyperX Predator 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Sillicon Power 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'TEAMGROUP T-Force Vulcan 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'TEAMGROUP T-Force Delta RGB 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Sillicon Power XPOWER Turbine 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'G.Skill Aegis 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Corsair Dominator Platinum RGB 32GB (2x16GB) DDR4 3600MHz',speed:3600,price:199.99},
            {name:'Kingston Fury Renegade RGB 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Crucial Ballistix 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Kingston HyperX Fury 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'ADATA XPG Spectrix D60G 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'OLOy WarHawk RGB 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'Patriot Viper 4 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'G.Skill Trident Z Royal Elite 128GB (8x16GB) DDR4 3600MHz',speed:3600,price:799.99},
            {name:'G.Skill Trident Z Royal 64GB (4x16GB) DDR4 3600MHz',speed:3600,price:399.99},
            {name:'TEAMGROUP Elite 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'TEAMGROUP T-Force Delta 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'OLOy MDK 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
            {name:'G.SKill Trident Z RGB 32GB (2x16GB) DDR4 3600MHz',speed:3600,price:199.99},
            {name:'G.Skill Trident Z RGB 16GB (2x8GB) DDR4 3600MHz',speed:3600,price:99.99},
        ]
  const STRGE=[
            {name:'Samsung 970 EVO Plus 1TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Samsung 970 EVO Plus 2TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Samsung 970 EVO Plus 4TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Samsung 970 EVO Plus 500GB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'SeaGate Barracuda 2TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Kingston NV2',price:199.99,type:'SSD'},
            {name:'Samsung 990 Pro 1TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Teamgroup QX2 1TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Western Digital Black 1TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Seagate Barracuda Compute 2TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Samsung 870 Evo 1TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Sabrent Rocket 1TB M.2 NVMe',price:199.99,type:'SSD'},

            {name:'Sabrent Rocket 4TB M.2 NVMe',price:199.99,type:'SSD'},
            {name:'Kingston A400',price:59.99,type:'SSD'},
            {name:'Seagate Barracuda 4TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Seagate Barracuda 6TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Seagate Barracuda 8TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Seagate Barracuda 10TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Seagate Barracuda 12TB 3.5" SATA',price:59.99,type:'HDD'},
            {name:'Kingston MX500',price:59.99,type:'SSD'},
            {name:'Synology SAT5200',price:3099.99,type:'SSD'},
            {name:'Patriot Burst Elite',price:59.99,type:'SSD'},
            {name:'Seagate IronWolf Pro 8TB 3.5" SATA',price:199.99,type:'HDD'},
            {name:'SK Hynix Platinum P41',price:59.99,type:'SSD'},
            {name:'Seagate IronWolf Pro 10TB 3.5" SATA',price:199.99,type:'HDD'},
            {name:'Western Digital Red Pro 10TB 3.5" SATA',price:199.99,type:'HDD'},

        ]
  const PWRSPLY=[
            {name:'Corsair RM850x',efficiency:80,type:'ATX',modular:true,wattage:850,price:99.99},
            {name:'Corsair RM750x',efficiency:80,type:'ATX',modular:true,wattage:750,price:99.99},
            {name:'Corsair RM650x',efficiency:80,type:'ATX',modular:true,wattage:650,price:99.99},
            {name:'Corsair HX1200 Platinum',efficiency:80,type:'ATX',modular:true,wattage:1200,price:99.99},
            {name:'Corsair HX1000 Platinum',efficiency:80,type:'ATX',modular:true,wattage:1000,price:99.99},
            {name:'Corsair HX850 Platinum',efficiency:80,type:'ATX',modular:true,wattage:850,price:99.99},
            {name:'Thermaltake Smart Pro RGB 850W',efficiency:80,type:'ATX',modular:true,wattage:850,price:99.99},
            {name:'Thermaltake Toughpower Grand RGB 850W',efficiency:80,type:'ATX',modular:true,wattage:850,price:99.99},
            {name:'Thermaltake Toughpower Grand RGB 750W',efficiency:80,type:'ATX',modular:true,wattage:750,price:99.99},
            {name:'Corsair SF50',efficiency:80,type:'SFX',modular:true,wattage:500,price:99.99},
            {name:'Corsair SF600',efficiency:80,type:'SFX',modular:true,wattage:600,price:99.99},
            {name:'Cooler Master V850 SFX Gold',efficiency:80,type:'SFX',modular:true,wattage:850,price:99.99},
        ]
const MNTR=[
        
        ]

const listIndex = [{
    "CPU":1,
    "GPU":2,
    "MOBO":3,
    "MEM":4,
    "STRGE":5,
    "PWRSPLY":6,
    "MNTR":7
}]