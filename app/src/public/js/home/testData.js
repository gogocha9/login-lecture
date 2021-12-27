const testData = [
    {no_A:"130351", no_B:"행님..노무현 탄핵이랑 박근혜 탄핵이랑", no_C:"러브코레아노", no_D:"10분 전", no_E:"1"},
    {no_A:"Apple", no_B:"Apple", no_C:"Apple", no_D:"Apple", no_E:"Apple"},
    {no_A:"Banana", no_B:"Banana", no_C:"Banana", no_D:"Banana", no_E:"Banana"},
    {no_A:"melon", no_B:"melon", no_C:"melon", no_D:"melon", no_E:"melon"},
    {no_A:"water", no_B:"water", no_C:"water", no_D:"water", no_E:"water"},
    {no_A:"dark", no_B:"dark", no_C:"dark", no_D:"dark", no_E:"dark"},
    {no_A:"YEEP", no_B:"YEEP", no_C:"YEEP", no_D:"YEEP", no_E:"YEEP"},
    {no_A:"testData", no_B:"testData", no_C:"testData", no_D:"testData", no_E:"testData"},
    {no_A:"Apple", no_B:"Apple", no_C:"Apple", no_D:"Apple", no_E:"Apple"},
    {no_A:"Banana", no_B:"Banana", no_C:"Banana", no_D:"Banana", no_E:"Banana"},
    {no_A:"melon", no_B:"melon", no_C:"melon", no_D:"melon", no_E:"melon"},
    {no_A:"water", no_B:"water", no_C:"water", no_D:"water", no_E:"water"},
    {no_A:"dark", no_B:"dark", no_C:"dark", no_D:"dark", no_E:"dark"},
    {no_A:"YEEP", no_B:"YEEP", no_C:"YEEP", no_D:"YEEP", no_E:"YEEP"},
    {no_A:"testData", no_B:"testData", no_C:"testData", no_D:"testData", no_E:"testData"},
    {no_A:"Apple", no_B:"Apple", no_C:"Apple", no_D:"Apple", no_E:"Apple"},
    {no_A:"Banana", no_B:"Banana", no_C:"Banana", no_D:"Banana", no_E:"Banana"},
    {no_A:"melon", no_B:"melon", no_C:"melon", no_D:"melon", no_E:"melon"},
    {no_A:"water", no_B:"water", no_C:"water", no_D:"water", no_E:"water"},
    {no_A:"dark", no_B:"dark", no_C:"dark", no_D:"dark", no_E:"dark"},
    {no_A:"YEEP", no_B:"YEEP", no_C:"YEEP", no_D:"YEEP", no_E:"YEEP"},
];

$(function() {
    $("#grid").kendoGrid({
        columns:[
            {title:"번호", field:"no_A", width:"50px",
             template:"<div class='name' onclick='move()'>#=no_A#</div>"
            },
            {title:"제목", field:"no_B", width:"200px"},
            {title:"글쓴이", field:"no_C", width:"50px"},
            {title:"날짜", field:"no_D", width:"50px"},
            {title:"조회 수", field:"no_E", width:"50px"},
        ],
        dataSource:{
            data:testData,
            pageSize:12
        },
        width:'100%',
        height:470,
        scrollable:true,
        pageable:true,
        sortable:{
            mode:"multiple"
        },
    });
});

function move(a, b) {
    alert("Column: " + a + "\nData : " + b);
}