
function SaveRadio()
{
    for ( i=0;i<document.getElementsByName("inlineRadioOptions").length;i++)
    {
        if (document.getElementsByName("inlineRadioOptions")[i].checked==true)
        {
            sessionStorage.setItem("chosen_radio",document.getElementsByName("inlineRadioOptions")[i].value);
        }
    }

}


function isNumeric(str) {
    if (typeof str != "string") return false
    if (str==="") return true;
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function CheckRadio()
{
    let CheckPressed=false;
    for ( i=0;i<document.getElementsByName("inlineRadioOptions").length;i++)
    {
        if (document.getElementsByName("inlineRadioOptions")[i].checked==true)
        {
            return true;
        }
    }
    document.getElementById("display_error").innerHTML="Chưa chọn phép tính";
   return false
}

function CheckNullNum()
{
    if (document.getElementById("input_num1").value==="" || document.getElementById("input_num2").value==="")
    {
        if (document.getElementById("input_num1").value==="" && document.getElementById("input_num2").value==="")
        {
            document.getElementById("display_error").innerHTML="Số 1 và 2 chưa được nhập";


        }
        else if (document.getElementById("input_num2").value==="")
        {
            document.getElementById("display_error").innerHTML="Số 2 chưa được nhập";
        }
        else if(document.getElementById("input_num1").value==="")
        {
            document.getElementById("display_error").innerHTML="Số 1 chưa được nhập";
        }
        return false;
    }
    return true;
}

function CheckNumeric()
{
    if (CheckNullNum()==true)
    {
        if (isNumeric(document.getElementById("input_num2").value) == false && isNumeric(document.getElementById("input_num1").value) == false) {
            document.getElementById("display_error").innerHTML = "Dữ liệu ở 2 ô không phải là số";
            return false;
        } else if (isNumeric(document.getElementById("input_num1").value) == false) {
            document.getElementById("display_error").innerHTML = "Dữ liệu ở ô số thứ nhất không phải là số";
            return false;
        } else if (isNumeric(document.getElementById("input_num2").value) == false) {
            document.getElementById("display_error").innerHTML = "Dữ liệu ở ô số thứ hai không phải là số";
            return false;
        } else {
            document.getElementById("display_error").innerHTML = "";
            return true;
        }
    }
    else {
            return false;
    }
}

function CheckSubmit()
{
    if (CheckNumeric()==true && CheckRadio()==true)
    {
        if (document.getElementById("radio_divine").checked==true && parseFloat(document.getElementById("input_num2").value)==0)
        {
            document.getElementById("display_error").innerHTML = "Không thể chia cho 0";
            return false;
        }
        SaveRadio();
        return true;
    }
    else
    {
        return false;
    }
}
document.addEventListener("DOMContentLoaded",function ()
{

        radio=sessionStorage.getItem("chosen_radio")

        for ( i=0;i<document.getElementsByName("inlineRadioOptions").length;i++)
        {
            if (document.getElementsByName("inlineRadioOptions")[i].value==radio)
            {
                document.getElementsByName("inlineRadioOptions")[i].checked=true;
                sessionStorage.clear();
                break;
            }
        }


})