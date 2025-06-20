const btn= document.getElementById("btn");
function randomcolor()
{
    const hex= "0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        const random_index= Math.floor(Math.random()*16);
        color=color+hex[random_index];
    }
    return color;
}
btn.addEventListener("click", function()
{
    const color=randomcolor();
    document.body.style.backgroundColor=color;
});