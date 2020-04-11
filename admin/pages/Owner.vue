<template>
    <main>
  

        <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new  owners</h2>
          <form>
              <!-- name -->
            <div class="a-spacing-top-medium">
              <label>Owner</label>
              <input class="a-input-text" style="width: 100%" v-model="name" />
            </div>
              <!-- about -->
             <div class="a-spacing-top-medium">
              <label>About</label>
              <input class="a-input-text" style="width: 100%" v-model="about" />
            </div>
                <!-- photo -->
               <div class="a-spacing-top-medium"> 
                                 <label style="margin-bottom:0px">
                                      Add Photo
                                 </label>

                                 <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>>
                                 </div>

                            </div>

            <!-- Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="addNewOwner">Add Owner</span>
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group">
            <li
              v-for="owner in owners"
              :key="owner._id"
              class="list-group-item"
            >{{ owner.name }}</li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>


<script>
export default {


 async asyncData({$axios}){


     try{

         let response = await $axios.$get("http://localhost:8000/api/owners")



         return {

             owners : response.owners
         }
     }


     catch(err) {


         console.log(err,"this the error")
     }






 },

//     // name
// :
// "picturesg"
// about
// :
// "im honest"
// ph

data(){

     return{
         name:"",
         about:"",
         selectedName:null,
         fileName:""
     }

},

methods:{


    onFileSelected(event){

        this.selectedFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
    },



    async addNewOwner({$axios}){

try{

    console.log('hello')

    let data = new FormData();

     data.append("name",this.name)
      data.append("about",this.about)
       data.append("photo",this.selectedFile,this.selectedFile.name)
    
     console.log(data,'this is the data')

      
      let response = await $axios.$post('http://localhost:8000/api/owners',data)



console.log(response,'this is the response')
         this.owners.push({name:this.name})


         console.log(this.owners)
       
   }

  

   catch(err){



   }

    }
    
}
}
</script>