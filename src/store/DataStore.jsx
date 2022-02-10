import { action, computed, makeObservable, observable } from "mobx"

class DataStore{
    Items=[];

    constructor(){
        makeObservable(this, {
            Items : observable,
            getTask : action,
            delTask : action,
            UpdateTask : action,
            ClearList : action
        })
    }

     getTask=(newItem)=>{
         newItem !== '' ?
        ( this.Items.includes(newItem) ? alert('Task already added') : this.Items= [...this.Items , newItem]
        ) : alert('please Fill the feild')
    }
        

    delTask=(itemVal)=>{
        this.Items.forEach(element => {
            if(element == itemVal){
              this.Items.splice(this.Items.indexOf(element), 1)
              this.Items=[...this.Items]
            }
          });
    }

    UpdateTask =(id , input)=>{
        console.log(id)
        this.Items.forEach((element)=>{
            if(element== id){
                this.Items[this.Items.indexOf(element)]= input
                this.Items=[...this.Items]
            }
        })  
    }

    ClearList=()=>{
        this.Items=[]
    }

}

export const ItemsList= new DataStore()