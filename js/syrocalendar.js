var debug = 0;
document.addEventListener("DOMContentLoaded", function () {
    FetchData();
});
function SyroCalendar_GetSeasonalInfo(TodaysDate) { }
function SyroCalendar_GetLiturgicalReadings_Set2(TodaysDate) { }
function GetSeasonalInfoJSON() {
    if (localStorage.getItem("SyroCalendar_Date") === null)
        return JSON.parse('{"Error":"Check if Script file is linked properly"}');
    else
        return JSON.parse(window.localStorage.getItem('SyroCalendar_Values'))['Day'];
}
function GetLiturgicalReadingsJSON() {
    if (localStorage.getItem("SyroCalendar_Date") === null)
        return JSON.parse('{"Error":"Check if Script file is linked properly"}');
    else
        return JSON.parse(window.localStorage.getItem('SyroCalendar_Values'))['Readings'];
}
function GetLiturgicalReadings_Set1JSON() {
    if (localStorage.getItem("SyroCalendar_Date") === null)
        return JSON.parse('{"Error":"Check if Script file is linked properly"}');
    else
        return JSON.parse(window.localStorage.getItem('SyroCalendar_Values'))['Readings_Set1'];
}
function GetLiturgicalReadings_Set2JSON() {
    if (localStorage.getItem("SyroCalendar_Date") === null)
        return JSON.parse('{"Error":"Check if Script file is linked properly"}');
    else
        return JSON.parse(window.localStorage.getItem('SyroCalendar_Values'))['Readings_Set2'];
}
function FetchData(TodaysDate) {
    if (TodaysDate === undefined) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
    } else {
        today = TodaysDate;
    }
    var SavedSyroValueDate = localStorage.getItem("SyroCalendar_Date");
    if (SavedSyroValueDate == today) {
        if (debug == 1)
            console.log("Data Fetched from Storage");
        RunAllFunctions();
    } else {
        var getJSON = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    callback(null, xhr.response);
                } else {
                    callback(status);
                }
            }
                ;
            xhr.send();
        };
        getJSON('https://syrocalendar.tk/SyroMalabarCalendar/?Mode=JSON&Type=MADELY&Date=' + today, function (err, tmtm) {
            if (err != null) {
                console.error(err);
            } else {
                if (debug == 1)
                    console.log("Data Fetched from API");
                localStorage.removeItem("SyroCalendar_Values");
                localStorage.removeItem("SyroCalendar_Date");
                localStorage.setItem("SyroCalendar_Values", JSON.stringify(tmtm));
                localStorage.setItem("SyroCalendar_Date", today);
            }
        });
    }
}