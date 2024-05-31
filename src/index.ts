import { Observable } from "rxjs";
import { fromEvent } from 'rxjs';
import {
    switchMap,
    startWith,
    scan,
    takeWhile,
    takeUntil,
    filter,
    mapTo,
    map,
    tap,
    pluck
  } from 'rxjs/operators';

//#region Exo1

// const observable$ = new Observable<number>((subscriber) => {
//     subscriber.next(1);
//     subscriber.next(2);
//     setInterval(()=> {
//         subscriber.next(3);
//     },11000)
// });

// // }

// // setInterval(()=>{
// //     subscribe();
// // },10000)

// observable$.subscribe({
//     next(x){
//         console.log("coucou", x);
//     },
//     error(error){
//         console.error(error);
//     },
//     complete(){
//         console.log("finished but restarting");
//     }
// });

//#endregion Exo1


//#region Exo2
// class button{
//     button_section? : HTMLElement;
//     title : string; 
//     button_elt? : HTMLElement;
//     paragraph? : HTMLElement;
//     paragraph2? : HTMLElement;
//     counter : number = 0;
//     constructor(title : string){
//         this.title = title;
//         this.render(title);
//     }
//     render(buttonName : string) : any {
//         (this.paragraph = document.createElement("p")).id = "p";
//         document.body.appendChild(this.paragraph);

//         (this.paragraph2 = document.createElement("p")).id = "p2";
//         document.body.appendChild(this.paragraph2);

//         (this.button_section = document.createElement("section")).id = "divName";
//         document.body.appendChild(this.button_section);

//         (this.button_elt = document.createElement("button")).id = buttonName;
//         this.button_elt.innerText = "+1";

//         this.button_section.appendChild(this.button_elt);
//     }
//     generateObservaleFromClick() : Observable<any>{
//         const source = fromEvent(this.button_elt!,'click');
//         const exemple = source.pipe(map((event : Event)=> 1),scan(c => c+1));
//         const subscribe = exemple;
//         return exemple;
//     }

// }
// const buttonC = new button("Counter");
// const obs$ = buttonC.generateObservaleFromClick()
// obs$.subscribe(val=> (buttonC.paragraph!.textContent = val.toString()));
// obs$.subscribe(val => (buttonC.paragraph2!.textContent = (val+5).toString()));

//#endregion Exo2


//#region TestFun

class Character{
    xPosition : number;
    yPosition : number;
    element : HTMLElement;
    constructor(parentWidth : number, parentHeight : number){
        this.xPosition = parentWidth/2;
        this.yPosition = 0;
        this.element = document.getElementById("child") as HTMLElement;
    }
    init() : void {
        this.element.setAttribute("style",`left : ${this.xPosition}px; bottom : ${this.yPosition}px; `);
        // this.element.style.left = toString();
        console.log(this.element);
    }
}
class Movement{
    personne : Character;
    constructor(personne : Character){
        this.personne = personne;
    }
    moveUp()
    {
        this.personne.yPosition += 10;
        this.personne.element.setAttribute("style", `bottom : ${this.personne.yPosition}px; left : ${this.personne.xPosition}px `);
    }
    moveDown()
    {
        this.personne.yPosition -= 10;
        this.personne.element.setAttribute("style", `bottom : ${this.personne.yPosition}px; left : ${this.personne.xPosition}px `);
    }
    moveLeft()
    {
        this.personne.xPosition -= 10;
        this.personne.element.setAttribute("style", `bottom : ${this.personne.yPosition}px; left : ${this.personne.xPosition}px `);
    }
    moveRight()
    {
        this.personne.xPosition += 10;
        this.personne.element.setAttribute("style", `bottom : ${this.personne.yPosition}px; left : ${this.personne.xPosition}px `);
    }

    movementInit(){
        document.addEventListener("keydown",(event)=>{
            if(event.key == "ArrowUp"){
                this.moveUp();
            }
            if(event.key == "ArrowDown"){
                this.moveDown();
            }
            if(event.key == "ArrowLeft"){
                this.moveLeft();
            }
            if(event.key == "ArrowRight"){
                this.moveRight();
            }
        })
    }
}





const perso = new Character(1000,800);
const move = new Movement(perso);
perso.init();
move.movementInit();




//#endregion TestFun