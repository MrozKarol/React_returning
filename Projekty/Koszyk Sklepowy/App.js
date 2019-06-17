class App extends React.Component {
    state = { 
        items:[
            {id: 1, name:'herbata', active:true},
            {id: 2, name:'ziemniaki', active:false},
            {id: 3, name:'kasza', active:false},
            {id: 4, name:'zupa pomidorowa', active:false},
            {id: 5, name:'wrzatek', active:false},
            {id: 6, name:'chleb', active:true},  
        ],
     }
    render() { 
        return ( 
            <div>Menu</div>
         );
    }
}
 
