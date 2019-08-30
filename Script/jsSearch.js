var dataSearch=[
        {
            "id":1,
            "value":"bệnh viện"
        },
        {
            "id":2,
            "value":"bệnh viện <b>da liễu</b>"
        },
        {
            "id":3,
            "value":"bệnh viện <b>bạch mai</b>"
        },
        {
            "id":4,
            "value":"bệnh viện <b>chợ rẫy</b>"
        },
        {
            "id":5,
            "value":"bệnh viện <b>bạch mai cơ sở 2</b>"
        }
        
    ]
    
var dtSearch = document.getElementById("dtSearch");
var result ='';
result += "<ul id='listDBSearch'>";
for (let index = 0,len = dataSearch.length; index < len; index++) {
    result +="<li><a href='#'>";
    result += dataSearch[index].value;
    result +="</a></li>";
}
dtSearch.innerHTML = result + "</ul>";

function searchBV() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("namebv");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listDBSearch");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && (input.value.length  > 0)) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
