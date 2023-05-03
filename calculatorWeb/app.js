let screen = document.querySelector('#screen-result');

function getdata(ref)
{
let value = ref.value;
screen.value += value;
}

function clean()
{
screen.value = "";
}
function calculate()
{
    try
    {
        screen.value = eval(screen.value);
        if (screen.value == Infinity)
        {
            console.log(error);
        }
    }
    catch (error)
    {
        screen.value = 'Invalid';
        setTimeout(() => {clean();},2000)    
    }
}