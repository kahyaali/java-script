

// döngüler loops

// For loops

for(let i=0;i<10;i++)
{
    console.log(i);
}

for(let j=0;j<10;j++)
{
    if(j==3)
    {
        console.log('gelen rakam: '+j);
        continue; // contine dediğimizde döngü devam eder
    }
    if(j==6)
    {
        console.log('gelen rakam: '+j);
        break; // break dediğimizde döngü son bulur ve break komutundan sonra döngüden çıkılır
    }
    console.log(j);
}

// while loops
let x=0;
while(x<10)
{
    console.log(x);
    x++;
}

// do while loops
let y=0;
do{
    console.log(y);
    y++;
}
while(y<10);
