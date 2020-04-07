<template>
    <main>


         <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3">


            </div>

            <div class="col-sm-6">
                <div class="a-section">

                <div class="a-spacing-top-medium">

                </div>

                    <h2 style="text-align:center">Add new Category</h2>

                    <form>
                         <!-- Adding Category -->
                         <div class="a-spacing-top-medium">
                            <label style="margin-bottom:0px;">
                                Category
                            </label>  
                          <input type="text" class="a-input-text"
                           style="width:100%;"
                           v-model="type">
                                     </div>
                                     <!-- Price -->
                         
                             <hr />

                             <!-- submit button -->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="AddProduct">
                                            Add Category
                                        </span>
                                    </span>
                                </span>
                            </div>
                    </form>
                </div>

            </div>

            <div class="col-sm-3">

            </div>
        </div>
    </div>



    </main>
</template>

<script>
export default {



    

    methods:{

        addCategory(event){

            this.type = this.event.value;
        },


        data() {

            return{
                 type:''
            }




        },



        async Addsubmit(){

            let data = new FormData();

            data.append("category",this.type)



        


          let result = await this.$axios.$post('http://localhost:8000/api/categories')



          this.$router.push('/product')



        }


    }

}

</script>

<style>

</style>