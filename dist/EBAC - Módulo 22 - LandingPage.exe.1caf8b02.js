AOS.init();
const dateEvent = new Date("Dec 31, 2025 23:59:59");
const timeStampofEvent = dateEvent.getTime();
const HourCount = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();
    const distanceToEvent = timeStampofEvent - timeStampNow;
    const dayEmMS = 86400000;
    const hourEmMS = 3600000;
    const minEmMs = 60000;
    const daysToEvent = Math.floor(distanceToEvent / dayEmMS);
    const hoursToEvent = Math.floor(distanceToEvent % dayEmMS / hourEmMS);
    const minToEvent = Math.floor(distanceToEvent % hourEmMS / minEmMs);
    const secundsToEvent = Math.floor(distanceToEvent % minEmMs / 1000);
    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minToEvent);
    console.log(secundsToEvent);
    document.getElementById('count').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minToEvent}m ${secundsToEvent}s`;
    if (distanceToEvent < 0) {
        clearInterval(HourCount);
        document.getElementById('count').innerHTML = 'Evento Finalizado';
    }
}, 1000);

//# sourceMappingURL=EBAC - Módulo 22 - LandingPage.exe.1caf8b02.js.map
