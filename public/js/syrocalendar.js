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
function WriteSeasonalInfo(tmtm) {
    if (document.getElementById("SyroCalendar_SeasonName_Mal"))
        document.getElementById("SyroCalendar_SeasonName_Mal").innerHTML = tmtm.Day.SeasonName_Mal_Full; if (document.getElementById("SyroCalendar_SeasonName_Eng"))
        document.getElementById("SyroCalendar_SeasonName_Eng").innerHTML = tmtm.Day.SeasonName_Eng_Full; if (document.getElementById("SyroCalendar_SeasonName_Man"))
        document.getElementById("SyroCalendar_SeasonName_Man").innerHTML = tmtm.Day.SeasonName_Man_Full; if (tmtm.Day.SeasonName_Syr_Full != null) {
            if (document.getElementById("SyroCalendar_SeasonName_Syr"))
                document.getElementById("SyroCalendar_SeasonName_Syr").innerHTML = tmtm.Day.SeasonName_Syr_Full;
        } else {
        if (document.getElementById("SyroCalendar_SeasonName_Syr"))
            document.getElementById("SyroCalendar_SeasonName_Syr").style.display = "none";
    }
    if (tmtm.Day.SeasonName_San_Full != null) {
        if (document.getElementById("SyroCalendar_SeasonName_Syr_Eng"))
            document.getElementById("SyroCalendar_SeasonName_Syr_Eng").innerHTML = tmtm.Day.SeasonName_San_Full;
    } else {
        if (document.getElementById("SyroCalendar_SeasonName_Syr_Eng"))
            document.getElementById("SyroCalendar_SeasonName_Syr_Eng").style.display = "none";
    }
    if (document.getElementById("SyroCalendar_SeasonWeek_Eng"))
        document.getElementById("SyroCalendar_SeasonWeek_Eng").innerHTML = tmtm.Day.WeeksNumber_Eng; if (document.getElementById("SyroCalendar_SeasonWeek_Mal"))
        document.getElementById("SyroCalendar_SeasonWeek_Mal").innerHTML = tmtm.Day.WeeksNumber_Mal;
}

function WriteLiturgicalReadings_Set2(tmtm) {
    var ContentMalayalamReading = ""; var ContentEnglishReading = ""; var ReadingFlag = 0; tmtm.Readings.forEach((item) => {
        if (ReadingFlag == 0) { ContentMalayalamReading = ContentMalayalamReading + "<h3 class=\"SyroCalendar_LiturgicalReading_Title_Mal\">" + item.DayDescription_Mal + "</h3> <div class=\"SyroCalendar_LiturgicalReading_Text_Mal\">"; }
        else { ContentMalayalamReading = ContentMalayalamReading + "<h3 class=\"SyroCalendar_LiturgicalReading_Title_Mal\">" + item.DayDescription_Mal + "</h3> <div class=\"SyroCalendar_LiturgicalReading_Text_Mal\">"; }
        if (item.Reading1_Mal != null)
            ContentMalayalamReading = ContentMalayalamReading + "<b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 1) " + item.Reading1_Mal + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Mal\">" + item.Reading1_Title_Mal + "</span>"; if (item.Reading2_Mal != null)
            ContentMalayalamReading = ContentMalayalamReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 2) " + item.Reading2_Mal + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Mal\">" + item.Reading2_Title_Mal + "</span>"; if (item.Reading3_Mal != null)
            ContentMalayalamReading = ContentMalayalamReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 3) " + item.Reading3_Mal + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Mal\">" + item.Reading3_Title_Mal + "</span>"; if (item.ReadingGospal_Mal != null)
            ContentMalayalamReading = ContentMalayalamReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " G) " + item.ReadingGospal_Mal + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Mal\">" + item.ReadingGospal_Title_Mal + "</span>"; ContentMalayalamReading = ContentMalayalamReading + "<div class = \"SyroCalendar_LiturgicalReading_BREAK\"></div>"; if (ReadingFlag == 0) { ContentEnglishReading = ContentEnglishReading + "<h3 class=\"SyroCalendar_LiturgicalReading_Title_Eng\">" + item.DayDescription_Eng + "</h3> <div class=\"SyroCalendar_LiturgicalReading_Text_Eng\">"; }
        else { ContentEnglishReading = ContentEnglishReading + "<h3 class=\"SyroCalendar_LiturgicalReading_Title_Eng\">" + item.DayDescription_Eng + "</h3> <div class=\"SyroCalendar_LiturgicalReading_Text_Eng\">"; }
        if (item.Reading1_Eng != null)
            ContentEnglishReading = ContentEnglishReading + "<b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 1) " + item.Reading1_Eng + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Eng\">" + item.Reading1_Title_Eng + "</span>"; if (item.Reading2_Eng != null)
            ContentEnglishReading = ContentEnglishReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 2) " + item.Reading2_Eng + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Eng\">" + item.Reading2_Title_Eng + "</span>"; if (item.Reading3_Eng != null)
            ContentEnglishReading = ContentEnglishReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " 3) " + item.Reading3_Eng + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Eng\">" + item.Reading3_Title_Eng + "</span>"; if (item.ReadingGospal_Eng != null)
            ContentEnglishReading = ContentEnglishReading + "<br><b class = \"SyroCalendar_LiturgicalReading_Chapter\">" + " G) " + item.ReadingGospal_Eng + "</b>" + "<br><span class = \"SyroCalendar_LiturgicalReading_ChapterHeading_Eng\">" + item.ReadingGospal_Title_Eng + "</span>"; ContentEnglishReading = ContentEnglishReading + "<div class = \"SyroCalendar_LiturgicalReading_BREAK\"></div>"; ReadingFlag++;
    }); if (document.getElementById("SyroCalendar_LiturgicalReadings_Mal"))
        document.getElementById("SyroCalendar_LiturgicalReadings_Mal").innerHTML = ContentMalayalamReading; if (document.getElementById("SyroCalendar_LiturgicalReadings_Eng"))
        document.getElementById("SyroCalendar_LiturgicalReadings_Eng").innerHTML = ContentEnglishReading;
}

function PopulateSyroValues(tmtm, SyroType) {
    switch (SyroType) {
        case 1:
            WriteSeasonalInfo(tmtm);
            if (debug == 1)
                console.log("Seasonal Info");
            break;
        case 3:
            WriteLiturgicalReadings_Set2(tmtm);
            if (debug == 1)
                console.log("Liturgical Readings Set 2");
            break;
    }
}
function FetchData(TodaysDate) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
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
        getJSON('https://syrocalendar.com/SyroMalabarCalendar/?Mode=JSON&Type=MADELY&Date=' + today, function (err, tmtm) {
            if (err != null) {
                console.error(err);
            } else {
                if (debug == 1)
                    console.log("Data Fetched from API");
                localStorage.removeItem("SyroCalendar_Values");
                localStorage.removeItem("SyroCalendar_Date");
                localStorage.setItem("SyroCalendar_Values", JSON.stringify(tmtm));
                localStorage.setItem("SyroCalendar_Date", today);
                RunAllFunctions();
            }
        });
    }
}
function RunAllFunctions() {
    PopulateSyroValues(JSON.parse(localStorage.getItem("SyroCalendar_Values")), 1);
    PopulateSyroValues(JSON.parse(localStorage.getItem("SyroCalendar_Values")), 3);
}
