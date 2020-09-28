import arrPages from '../pages/pages.js'


class Page {
    render() {

    }
}

class Section extends Page {
    constructor(options) {
        super();

        this.options = options;
    }

    render() {
        super.render();

        for (let x = 0; x < arrPages.length; x++) {
            let element = $(this.options[x].title)
            $.get(`/pages/${this.options[x].markdown}`, x => {
                element.html(x);
            });
        }
    }
}

class SinglePageApp extends Page{
    constructor() {
        super();
        this.Section = new Section(arrPages);
    }
    render() {
        super.render();
        this.Section.render();
    }
}

function ManagePages(option)
{


}

$(document).ready(()=>{
    console.log(`DOM Ready`);

    let homeVis = false

    $(`#home_link`).on("click", function () {
        console.log(`home_clicked`);

        $(`#home_page`).addClass(`hidden`);


    });




    new SinglePageApp().render();
});



//
// class HomePage extends Page {
//     constructor() {
//         super();
//     }
//     render() {
//         super.render();
//         let list = ``;
//
//         for(let x = 0; x < arrPages.length; x++){
//
//             list += `<div class="page-list"><li class="list-item item-title">${arrPages[x].title}</li>
//                 <li class="list-item item-markdown">Markdown: ${arrPages[x].markdown}</li>
//                 </div>
//                 </br>`;
//         }
//
//         $(`homepage`).html(list);
//         console.log(`Homepage rendered ...`);
//     }
// }
//
// class AboutPage extends Page{
//     constructor(oOptions){
//         super();
//         this.oOptions = oOptions;
//     }
//     render(){
//
//         $.get(`/pages/about.md`, (x)=> {
//             $(`aboutPage`).html(marked(x));
//         });
//     }
// }

