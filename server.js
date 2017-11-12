var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var util = require('util');
var bodyParser = require('body-parser')
// var path = requir('path');

var watson = require('watson-developer-cloud');

var text_to_speech = new watson.TextToSpeechV1({
    "url": "https://stream.watsonplatform.net/text-to-speech/api",
    "username": "614d7ae4-5bd2-4adf-bca9-589280577196",
    "password": "W8nfLLcNkNwN"
});

var params = { text: 'good morning nithin', voice: 'en-US_AllisonVoice', accept: 'audio/mp3' };
app.use(express.static(__dirname));
app.get('/', function (req, res) {

    //res.writeHead(200,{'Content-type':'text/plain'});
    //res.set('Content-Type', 'application/javascript');

    res.render(path.join(__dirname + '/index.html'), { abc: '123' });
})

var arrDetails = [{
    id: 1,
    header: 'Acer Aspire E 15 E5-575-33BM 15.6-Inch FHD Notebook (Intel Core i3-7100U 7th Generation , 4GB DDR4, 1TB 5400RPM HD, Intel HD Graphics 620, Windows 10 Home), Obsidian Black',
    brand: 'Acer',
    price: '$349.99',
    screen: '15.6" Full HD Widescreen ComfyView LED-backlit Display supporting Acer ColorBlast technology',
    screenresolution: '1920 x 1080 pixels',
    processor: '7th Generation Intel Core i3-7100U Processor (2.4GHz, 3MB L3 cache)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '4 GB DDR4 Memory',
    harddrive: '1TB 5400RPM HDD',
    graphicscoprocessor: 'Intel HD Graphics 620',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '12 hours',
    series: 'E5-575',
    modelnumber: 'E5-575-33BM',
    operatingsystem: 'Windows 10',
    productdimensions: '10.2 x 15 x 1.2 inches',
    color: 'Obsidian Black',
    weight: '5.3 pounds',
    url: '/images/acer1.jpg',
    shipping: 'FREE',
    rating: '3.7 out of 5 stars',
    stock: 'In Stock',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '15 Dec to 18 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 2,
    header: 'Acer Aspire E 15 E5-575G-57D4 15.6-Inches Full HD Notebook (7th Gen Intel Core i5-7200U, GeForce 940MX, 8GB DDR4 SDRAM, 256GB SSD, Windows 10 Home), Obsidian Black',
    brand: 'Acer',
    price: '$549.99',
    screen: '15.6" Full HD Widescreen ComfyView LED-backlit Display supporting Acer ColorBlast technology',
    screenresolution: '1920 x 1080 pixels',
    processor: '7th Generation Intel Core i5-7200U Processor (Up to 3.1GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB DDR4 Memory',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'NVIDIA GeForce 940MX with 2GB of GDDR5 Video Memory',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '12 hours',
    series: 'E5-575G',
    modelnumber: 'E5-575G-57D4',
    operatingsystem: 'Windows 10',
    productdimensions: '10.2 x 15 x 1.2 inches',
    color: 'Obsidian Black',
    weight: '5.3 pounds',
    url: '/images/acer2.jpg',
    shipping: 'FREE',
    rating: '4.1 out of 5 stars',
    stock: 'In Stock',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '12 Dec to 15 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 3,
    header: 'Acer Predator Helios 300 Gaming Laptop, 15.6" Full HD, Intel Core i7-7700HQ CPU, 16GB DDR4 RAM, 256GB SSD, GeForce GTX 1060-6GB, VR Ready, Red Backlit KB, Metal Chassis, G3-571-77QK',
    brand: 'Acer',
    price: '$1049.99',
    screen: '15.6" Full HD (1920 x 1080) widescreen IPS display',
    screenresolution: '1920 x 1080 pixels',
    processor: 'Latest 7th Generation Intel Core i7-7700HQ Processor (Up to 3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16GB DDR4 Memory',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'Latest NVIDIA GeForce GTX 1060 with 6 GB of dedicated GDDR5 VRAM',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '7 hours',
    series: 'G3-571-77QK',
    modelnumber: 'NH.Q28AA.001',
    operatingsystem: 'Windows 10',
    productdimensions: '10.2 x 15 x 1.2 inches',
    color: 'Black',
    weight: '6 pounds',
    url: '/images/acer3.jpg',
    shipping: 'FREE',
    rating: '3.8 out of 5 stars',
    stock: 'In Stock',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '12 Dec to 15 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 4,
    header: 'Acer Aspire VX 15 Gaming Laptop, 7th Gen Intel Core i7, NVIDIA GeForce GTX 1050 Ti, 15.6 Full HD, 16GB DDR4, 256GB SSD, VX5-591G-75RM',
    brand: 'Acer',
    price: '$999.99',
    screen: '15.6" Full HD (1920 x 1080) widescreen IPS display',
    screenresolution: '1920 x 1080 pixels',
    processor: '7th Generation Intel Core i7-7700HQ Processor (Up to 3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16GB DDR4 Memory',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'NVIDIA GeForce GTX 1050 Ti with 4 GB of dedicated GDDR5 VRAM',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11 A/C',
    usb3ports: '3',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '6 hours',
    series: 'Aspire VX',
    modelnumber: 'VX5-591G-75RM',
    operatingsystem: 'Windows 10',
    productdimensions: '15.3 x 10.4 x 1.1 inches',
    color: 'Black',
    weight: '5.5 pounds',
    url: '/images/acer4.jpg',
    shipping: 'FREE',
    rating: '4.0 out of 5 stars',
    stock: 'Only 17 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '5 Dec to 8 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 5,
    header: 'Acer Nitro 5, Intel Core i5-7300HQ, GeForce GTX 1050 Ti, 15.6" Full HD, 8GB DDR4, 256GB SSD, AN515-51-55WL',
    brand: 'Acer',
    price: '$749.99',
    screen: '15.6" Full HD (1920 x 1080) widescreen IPS display',
    screenresolution: '1920 x 1080 pixels',
    processor: '7th Generation Intel Core i5-7300HQ Processor (Up to 3.5GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB DDR4 Memory',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'NVIDIA GeForce GTX 1050 Ti with 4 GB of dedicated GDDR5 VRAM',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '8.5 hours',
    series: 'Aspire Nitro',
    modelnumber: 'AN515-51-55WL',
    operatingsystem: 'Windows 10',
    productdimensions: '15.3 x 10.4 x 1.1 inches',
    color: 'Shale Black',
    weight: '5.5 pounds',
    url: '/images/acer5.jpg',
    shipping: 'FREE',
    rating: '4.0 out of 5 stars',
    stock: 'Only 17 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '5 Dec to 8 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 6,
    header: 'Dell Inspiron i3552-4042BLK 15.6 Inch Laptop (Intel Celeron, 4 GB RAM, 500 GB HDD, Black)',
    brand: 'Dell',
    price: '$229.99',
    screen: '15.6 Inch HD (1366x768 pixels) LED-lit Screen',
    screenresolution: '1366 x 768 pixels',
    processor: 'Intel Celeron N3050, up to 2.3 GHz Processor',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '4 GB DDR3L SDRAM Included',
    harddrive: '500 GB HDD',
    graphicscoprocessor: 'HD Integrated Graphics',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 bgn',
    usb3ports: '1',
    batteries: '1 Lithium ion batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Inspiron 15 3000',
    modelnumber: 'i3552-4042BLK',
    operatingsystem: 'Windows 10',
    productdimensions: '10.3 x 15 x 0.9 inches',
    color: 'Black',
    weight: '4.9 pounds',
    url: '/images/dell1.jpg',
    shipping: 'FREE',
    rating: '3.3 out of 5 stars',
    stock: 'Only 20 left in stock (more on the way).',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '4 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 7,
    header: 'Dell Inspiron Touchscreen 15.6" HD Laptop PC, Intel Dual Core i3-7100U 2.4GHz, 8GB DDR4, 1TB HDD, DVD +/- RW, MaxxAudio, HDMI, Bluetooth, WIFI, Intel HD Graphics 620, Windows 10',
    brand: 'Dell',
    price: '$394.99',
    screen: '15.6" HD Touchscreen LED backlight widescreen for hands-on control (1366 x 768) display',
    screenresolution: '1366 x 768 (Touch HD)',
    processor: '7th Gen Intel Core i3-7100U Dual-Core mobile processor, 2.4 GHz',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB DDR4L 2400MHz',
    harddrive: '1TB HDD 5400rpm',
    graphicscoprocessor: 'HD Integrated Graphics',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 bgn',
    usb3ports: '2',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Dell 3000 15.6 Touch',
    modelnumber: 'Dell 3000 series',
    operatingsystem: 'Windows 10',
    productdimensions: '14.9 x 10.2 x 0.9 inches',
    color: 'Black',
    weight: '5.2 pounds',
    url: '/images/dell2.jpg',
    shipping: 'FREE',
    rating: '3.3 out of 5 stars',
    stock: 'Only 4 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '4 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 8,
    header: '2017 Newest Dell Inspiron 15 5000 15.6" Laptop (latest i5-7200U 8GB 256GB SSD) Windows 10 Pro 64-bit English',
    brand: 'Dell',
    price: '$595.99',
    screen: '15.6" HD (1366 x 768) Truelife LED-Backlit Display',
    screenresolution: '1366 x 768 (Touch HD)',
    processor: '7th Generation Intel Core i5-7200U (4MB Cache, up to 3.1 GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB DDR4L 2400MHz',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'Intel HD Graphics 620',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 bgn',
    usb3ports: '2',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Dell 5566',
    modelnumber: 'Dell 5566',
    operatingsystem: 'Windows 10 Pro 64-bit English',
    productdimensions: '14.9 x 10.2 x 0.9 inches',
    color: 'Black',
    weight: '5.2 pounds',
    url: '/images/dell3.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'Only 4 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '4 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 9,
    header: '2017 Newest Edition Dell Inspiron 15.6" Truelife HD(1366x768) 5566 Premium High Performance LED-Backlit Laptop, Intel Core i7-7500U, 8GB DDR4 RAM, 1TB HDD, SuperMulti DVD, Windows 10 Professional',
    brand: 'Dell',
    price: '$689.95',
    screen: '15.6" HD (1366 x 768) Truelife LED-Backlit Display',
    screenresolution: '1366 x 768 (Touch HD)',
    processor: '7th Generation Intel Core i7-7500U (4MB Cache, up to 3.5 GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB DDR4L 2400MHz',
    harddrive: '1TB SATA 5400rpm',
    graphicscoprocessor: 'Intel HD Graphics 620',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 A/C, 802.11bgn',
    usb3ports: '1',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Dell 5566',
    modelnumber: 'Dell 5566',
    operatingsystem: 'Windows 10 Professional',
    productdimensions: '19.4 x 14 x 3.1 inches',
    color: 'Black',
    weight: '7.1 pounds',
    url: '/images/dell4.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'In Stock',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '12 Dec to 14 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 10,
    header: '2017 Newest Dell Business Flagship 15.6" FHD Touchscreen Laptop PC Intel i7-7500U Processor 16GB DDR4 RAM 1TB HDD AMD Radeon R7 Graphics Backlit-Keyboard DVD-RW HDMI 802.11AC Webcam Windows 10-Gray',
    brand: 'Dell',
    price: '$829',
    screen: '15.6" Full HD LED touchscreen (1920 x 1080), 10-finger multi-touch support. Brilliant Full HD TrueLife display Dell TrueLife displays deliver darker blacks',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7500U 2.70 GHz with Turbo Boost Technology up to 3.20 GHz',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16GB 2400MHz DDR4',
    harddrive: '1TB SATA 5400rpm',
    graphicscoprocessor: 'AMD Radeon R7 M445 with 4GB graphics memory',
    chipsetbrand: 'AMD',
    wirelesstype: '802.11 a/b/g/n/ac, 802.11 A/C',
    usb3ports: '1',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Dell 5000 Series',
    modelnumber: 'Dell 5000',
    operatingsystem: 'Windows 10 Home, 64-bit',
    productdimensions: '16.69 x 11 x 1.06 inches',
    color: 'Black',
    weight: '7.4 pounds',
    url: '/images/dell5.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '12 Dec to 14 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 11,
    header: 'New Apple 13" MacBook Air (2017 Newest Version) 1.8GHz Core i5 CPU, 8GB RAM, 128GB SSD, MQD32LL/A',
    brand: 'Apple',
    price: '$869.88',
    screen: '13.3" screen with 1440x900 resolution',
    screenresolution: '1440x900',
    processor: '1.8GHz dual-core Intel Core i5 processor with Turbo Boost up to 2.9GHz',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB 1600MHz LPDDR3 memory',
    harddrive: '128GB SSD',
    graphicscoprocessor: 'Intel HD Graphics 6000',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Macbook Air',
    modelnumber: 'MQD32LL/A',
    operatingsystem: 'Mac OS X',
    productdimensions: '13 x 1 x 9 inches',
    color: 'Silver',
    weight: '3 pounds',
    url: '/images/apple1.jpg',
    shipping: 'FREE',
    rating: '4.6 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '12 Dec to 14 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 12,
    header: 'New Apple 13" MacBook Air (2017 Newest Version) 1.8GHz Core i5 CPU, 8GB RAM, 256GB SSD, Silver, MQD42LL/A',
    brand: 'Apple',
    price: '$1,147.95',
    screen: '13.3" screen with 1440x900 resolution',
    screenresolution: '1440x900',
    processor: '1.8GHz dual-core Intel Core i5 processor with Turbo Boost up to 2.9GHz',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB 1600MHz LPDDR3 memory',
    harddrive: '256GB SSD',
    graphicscoprocessor: 'Intel HD Graphics 6000',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11 A/C',
    usb3ports: '2',
    batteries: '1 Lithium Polymer batteries required. (included)',
    avgbatterylife: '8 hours',
    series: 'Macbook Air',
    modelnumber: 'MQD42LL/A',
    operatingsystem: 'Mac OS X',
    productdimensions: '13 x 1 x 9 inches',
    color: 'Silver',
    weight: '3 pounds',
    url: '/images/apple2.jpg',
    shipping: 'FREE',
    rating: '4.6 out of 5 stars',
    stock: 'Only 14 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '10 Dec to 14 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 13,
    header: 'Apple Macbook Pro MJLT2LL/A 15-inch Laptop (2.5 GHz Intel Core i7 Processor, 16GB RAM, 512 GB Hard Drive, Mac OS X) (2015 version)',
    brand: 'Apple',
    price: '$1,749.99',
    screen: '15" screen with 2880x1800 resolution',
    screenresolution: '2880x1800',
    processor: '2.5GHz quad-core Intel Core i7 with Turbo Boost up to 3.7GHz',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16GB 1600MHz memory',
    harddrive: '512GB PCIe-based flash storage',
    graphicscoprocessor: 'AMD Radeon R9 M370X with 2GB GDDR5 memory',
    chipsetbrand: 'Intel',
    wirelesstype: '	802.11A, 802.11 A/C, 802.11B, 802.11G, 802.11n',
    usb3ports: '2',
    batteries: '4 Lithium Polymer batteries required. (included)',
    avgbatterylife: '9 hours',
    series: 'MacBook Pro',
    modelnumber: 'MJLT2LL/A',
    operatingsystem: 'Mac OS X',
    productdimensions: '15.5 x 2.2 x 11.1 inches',
    color: 'Aluminium',
    weight: '4.5 pounds',
    url: '/images/apple3.jpg',
    shipping: 'FREE',
    rating: '4.6 out of 5 stars',
    stock: 'Only 14 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '5 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 14,
    header: 'Apple 11 inch MacBook Air Notebook Computer (i7 2.2Ghz, 8GB memory, 512GB SSD, 11.6" Display, Webcam, Bluetooth, Wi-Fi)',
    brand: 'Apple',
    price: '$1,399.99',
    screen: '11.6" LED-Backlit Glossy Display with 1366 x 768 Native Resolution',
    screenresolution: '1366 x 768',
    processor: '2.2 GHz 5th-gen Low-Voltage Intel Core i7 (Broadwell)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '8GB 1600 MHz Memory',
    harddrive: '512GB PCIe-based flash storage',
    graphicscoprocessor: ' Integrated Intel HD Graphics 6000',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11A, 802.11 A/C, 802.11B, 802.11G, 802.11n',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '6 hours',
    series: 'macbook air 11',
    modelnumber: 'Macbook air 11',
    operatingsystem: 'Mac OS X',
    productdimensions: '11.8 x 0.7 x 7.6 inches',
    color: 'Silver',
    weight: '2.38 pounds',
    url: '/images/apple4.jpg',
    shipping: 'FREE',
    rating: '4.5 out of 5 stars',
    stock: 'Only 20 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '5 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 15,
    header: 'Apple 13.3" Macbook Pro MD101 Laptop (2.5Ghz Core i5 CPU, 4GB RAM, 500GB HDD, DVDRW, MacOS X El Capitan)',
    brand: 'Apple',
    price: '$964.50',
    screen: '13" LED-Backlit Glossy Display with 1280x800 Native Resolution',
    screenresolution: '1280x800',
    processor: '2.5GHz Dual-Core Intel Core i5 Processor (Turbo Boost up to 3.1GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '4 GB DDR3 RAM',
    harddrive: '500GB',
    graphicscoprocessor: ' Integrated Intel HD Graphics 6000',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11n',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '6 hours',
    series: 'Macbook Pro',
    modelnumber: 'MD101HN/A',
    operatingsystem: 'Mac OS X',
    productdimensions: '8.9 x 12.8 x 0.9 inches',
    color: 'Silver',
    weight: '4.6 pounds',
    url: '/images/apple5.jpg',
    shipping: 'FREE',
    rating: '4.3 out of 5 stars',
    stock: 'Only 2 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '5 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 16,
    header: 'Microsoft Surface Laptop (Intel Core i7, 8GB RAM, 256 GB) - Graphite Gold',
    brand: 'Microsoft',
    price: '$1599.00',
    screen: '13.5” PixelSense Display 2256 x 1504 Resolution',
    screenresolution: '2256 x 1504',
    processor: '4 GHz 7th generation Intel Core i7 processor',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '4 GB DDR3 RAM',
    harddrive: '256GB',
    graphicscoprocessor: 'Intel HD 620 and Intel Iris Plus Graphics 640',
    chipsetbrand: 'Intel',
    wirelesstype: '802.11n',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'Microsoft Surface',
    modelnumber: 'DAJ-00021',
    operatingsystem: 'Windows 10 S',
    productdimensions: '2.1 x 9.9 x 13.4 inches',
    color: 'Graphite Gold',
    weight: '5 pounds',
    url: '/images/ms1.jpg',
    shipping: 'FREE',
    rating: '4.2 out of 5 stars',
    stock: 'Only 9 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '5 Dec to 7 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 17,
    header: 'Microsoft Surface Book (1 TB, 16 GB RAM, Intel Core i7, NVIDIA GeForce graphics)',
    brand: 'Microsoft',
    price: '$3,199.00',
    screen: '13.5” PixelSense Display 3000 x 2000 (267 PPI) pixels Resolution',
    screenresolution: '3000 x 2000',
    processor: '2.4 GHz 7th generation Intel Core i7 processor',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16 GB DDR3 RAM',
    harddrive: '1TB',
    graphicscoprocessor: 'NVIDIA GeForce, Intel Integrated Graphics',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'Surface Book 1TB i7 16GB',
    modelnumber: 'PA9-00001',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '1.9 x 16.5 x 10.9 inches',
    color: 'Graphite Gold',
    weight: '3.3 pounds',
    url: '/images/ms2.jpg',
    shipping: 'FREE',
    rating: '3.9 out of 5 stars',
    stock: 'Only 3 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '8 Dec to 9 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 18,
    header: 'Microsoft Surface Pro (Intel Core i7, 8GB RAM, 256GB) – Newest Version',
    brand: 'Microsoft',
    price: '$2,369.29',
    screen: '12.3” PixelSense Display 2736 x 1824 pixels Resolution',
    screenresolution: '2736 x 1824',
    processor: '4 GHz 7th generation Intel Core i7 processor',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16 GB DDR3 RAM',
    harddrive: '1TB',
    graphicscoprocessor: 'NVIDIA GeForce, Intel Integrated Graphics',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'surface_pro_i7',
    modelnumber: 'FKK-00001',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '7.9 x 11.5 x 0.3 inches',
    color: 'Black',
    weight: '1.7 pounds',
    url: '/images/ms3.jpg',
    shipping: 'FREE',
    rating: '4.1 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 19,
    header: 'MSI GS63VR Stealth Pro-002 15.6" 120Hz 3ms Display Ultra Thin and Light Gaming Laptop i7-7700HQ GTX 1070 8G MAX Q 32GB 512GB SSD + 1TB Win 10 Pro RGB Keyboard VR Ready',
    brand: 'MSI',
    price: '$2,369.29',
    screen: '15.6" Full HD 120Hz 3ms 94% NTSC Anti-Glare Wide View Angle 1920x1080',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7700HQ (2.8-3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '32 GB (16 x 2) GB DDR4 2400MHz RAM',
    harddrive: '512GB SSD + 1TB (SATA) 5400rpm',
    graphicscoprocessor: ' NVIDIAs GTX 1070 8 G GDDR5 Max Q ',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'GS63VR STEALTH PRO-002',
    modelnumber: 'GS63VR STEALTH PRO-002',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '9.8 x 15 x 0.7 inches',
    color: 'Aluminum Black',
    weight: '4 pounds',
    url: '/images/msi1.jpg',
    shipping: 'FREE',
    rating: '3.9 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 19,
    header: 'MSI WS63 7RK-290US IPS Level 15.6" Workstation Laptop NVIDIA Quadro P3000 i7-7700HQ 32GB 512GB SSD + 2TB Windows 10 PRO',
    brand: 'MSI',
    price: '$2,599.00',
    screen: '15.6" Full HD eDP IPS-Level | Resolution: 1920x1080',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7700HQ (2.8-3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '32 GB (16GB x 2) DDR4 2400MHz RAM',
    harddrive: '512GB SSD (PCIE Gen3 x4) + 2TB (SATA) 5400RPM',
    graphicscoprocessor: ' NVIDIA Quadro P3000 6GB DDR5',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'WS63 7RK-290US',
    modelnumber: 'WS63290',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '15 x 9.8 x 0.7 inches',
    color: 'Aluminum Black',
    weight: '4 pounds',
    url: '/images/msi2.jpg',
    shipping: 'FREE',
    rating: '3.9 out of 5 stars',
    stock: 'Only 11 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 3 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 20,
    header: 'MSI GE73VR Raider-003 17.3" 120Hz 5ms Premium Gaming Laptop i7-7700HQ GTX 1070 8G 32GB 512GB SSD + 1TB Win10 Full Color Per Key RGB VR Ready',
    brand: 'MSI',
    price: '$2,199.00',
    screen: '17.3" Full HD 120Hz 5ms Wide view 94%NTSC Color Anti-Glare 1920x1080 ',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7700HQ (2.8-3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '32 GB (16GB x 2) DDR4 2400MHz RAM',
    harddrive: '512GB M.2 SATA + 1TB (7200RPM)',
    graphicscoprocessor: 'NVIDIA GeForce GTX 1070 8G GDDR5',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '2',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'GE73VR Raider-003',
    modelnumber: 'GE73VR Raider-003',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '11.2 x 16.5 x 1.1 inches',
    color: 'Aluminum Black',
    weight: '6.2 pounds',
    url: '/images/msi3.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 20,
    header: 'MSI GT83VR TITAN SLI-212 18.4" Hardcore Gaming Laptop Core i7-7920HQ GTX 1080 SLI 64GB 1TB NVMe SSD + 1TB Mech KB VR Ready',
    brand: 'MSI',
    price: '$5,399.00',
    screen: '18.4 " Full HD | Wide View IPS-Level Non Reflection 1920x1080',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7920HQ (3.1-4.1GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '64 GB (32GB x 2) DDR4 2400MHz RAM',
    harddrive: '512GB M.2 SATA + 1TB (7200RPM)',
    graphicscoprocessor: 'Super RAID 4 1TB SSD (PCIE GEN3x4) [512GB*2] + 1TB (SATA) 7200rpm',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '3',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '13.5 hours',
    series: 'MSI GT83VR TITAN SLI-212',
    modelnumber: 'GT83VR TITAN SLI-212',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '16.9 x 12.4 x 1.8 inches',
    color: 'Aluminum Black',
    weight: '13.1 pounds',
    url: '/images/msi4.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
{
    id: 21,
    header: 'MSI GT62VR Dominator Pro-238 15.6" G-Sync Display Powerful Gaming Laptop Core i7-7700HQ GTX 1070 16GB 256GB SSD + 1TB VR Ready',
    brand: 'MSI',
    price: '$1,799.00',
    screen: '15.6" Full HD | Full HD eDP IPS-Level 1920x1080 ',
    screenresolution: '1920 x 1080',
    processor: 'Intel Core i7-7700HQ (2.8-3.8GHz)',
    processorbrand: 'Intel',
    processorcount: '1',
    ramsize: '16 GB (8GB x 2) DDR4 2400MHz RAM',
    harddrive: '256GB M.2 Sata + 1TB 7200rpm',
    graphicscoprocessor: 'NVIDIA GeForce GTX 1070 8G GDDR5',
    chipsetbrand: 'NVIDIA',
    wirelesstype: '802.11A/C',
    usb3ports: '3',
    batteries: '1 Lithium ion batteries required.',
    avgbatterylife: '14.5 hours',
    series: 'GT62VR DOMINATOR PRO-238',
    modelnumber: 'GT62VR DOMINATOR PRO-238',
    operatingsystem: '64-bit^Windows 10 Pro',
    productdimensions: '15.3 x 10.5 x 1.6 inches',
    color: 'Aluminum Black',
    weight: '6.2 pounds',
    url: '/images/msi5.jpg',
    shipping: 'FREE',
    rating: '5 out of 5 stars',
    stock: 'Only 1 left in stock - order soon.',
    warranty: 'Manufactuarer warranty 2 Yrs',
    expecteddelivery: '2 Dec to 3 Dec 2017',
    seller: 'Cloud retail'

},
];

app.get('/te', function (req, res) {
    console.log('te starts');
    text_to_speech.synthesize(params, function (err, audio) {
        if (err) {
            console.log(err);
            return;
        }
        var p = __dirname + 'audio2.mp3';
        fs.exists(p, function (exists) {
            if (exists) {
                console.log('exits');
            } else {
                console.log('not exits');
                fs.writeFileSync(p, audio);
            }
        });
        res.sendFile(path.join(__dirname + '/index1.html'));

    })
})

//var http = require('https');

app.get('/test', function (req, res) {


    console.log('te starts');



    for (let index = 0; index < arrDetails.length; index++) {
        const detail = arrDetails[index];
        var params = { text: detail.header + detail.price, voice: 'en-US_AllisonVoice', accept: 'audio/mp3' };
        text_to_speech.synthesize(params, function (err, audio) {
            if (err) {
                console.log(err);
                return;
            }
            var p = path.join(__dirname + '/songs/' + detail.id + '.mp3');
            //p="c://temp/audio1.mp3";
            console.log(p);
            fs.exists(p, function (exists) {
                if (exists) {
                    console.log('exits');
                } else {
                    console.log('not exits');
                    fs.writeFileSync(p, audio);
                    //res.download(audio);
                    // var readStream = fs.createReadStream(p);
                    // var stat = fs.statSync(p);
                    // console.log('size:' + stat.size);
                    // res.writeHead(200, {
                    //     'Content-Type': 'audio/mpeg',
                    //     'Content-Length': stat.size
                    // });
                    // readStream.pipe(res);

                    // res.writeHead(200, {
                    //     "Content-Type": "application/octet-stream",
                    //     "Content-Disposition": "attachment; filename=" + p
                    // });
                    // fs.createReadStream(p).pipe(res);
                }
            });
            //res.sendFile(path.join(__dirname + '/index1.html'));

        })
    }

})

app.get('/local', function (req, res) {
    console.log('local starts');
    var a = path.join(__dirname + '/songs/audo_0a.mp3');
    console.log('a is :' + a);
    var b = path.join(__dirname + '/songs/audo_01.mp3');
    var c = path.join(__dirname + '/songs/audo_02.mp3');
    var path = [a, b, c];
    for (let index = 0; index < path.length; index++) {
        const p = path[index];
        fs.createReadStream(p).pipe(res);
    }
    // res.writeHead(200, {
    //                     "Content-Type": "application/octet-stream",
    //                     "Content-Disposition": "attachment; filename=" + p
    //                 });
    //                 fs.createReadStream(p).pipe(res);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})




var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speech_to_text = new SpeechToTextV1({
    "url": "https://stream.watsonplatform.net/speech-to-text/api",
    "username": "a240f23d-05b0-4a71-b748-a8e3c606e929",
    "password": "kXTjoaVxKlLb"
});

var params = {
    // From file
    audio: fs.createReadStream('./songs/1.mp3'),
    content_type: 'audio/mp3'// 'audio/l16; rate=44100'
};

speech_to_text.recognize(params, function (err, res) {
    console.log('speech_to_text')
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(res, null, 2));
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ type: 'audio/webm', limit: '50mb' }));
app.post('/convert', function (req, res) {
    
    //fs.writeFileSync(p, audio);

    console.log('convert : ' + req.body)
    for (const key in req) {
        if (req.hasOwnProperty(key)) {
            const element = req[key];
            console.log('key : ' + key)
            console.log(element);
        }
    }
    // speech_to_text.recognize(obj, function (err, res) {
    //     console.log('speech_to_text')
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log(JSON.stringify(res, null, 2));
    // });
});



// // or streaming
// fs.createReadStream('./resources/speech.wav')
//   .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
//   .pipe(fs.createWriteStream('./transcription.txt'));