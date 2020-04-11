<template>
    <main>

        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>

                <col-sm-6>

                <div class="a-spacing-top-medium"> 
                </div>

                <h2>
                    Add a new  category
                </h2>

                <form>

                      <div class="a-spacing-top-medium"> 
                        <label>Type </label>


                        <input type="text" class="a-input-text"
                        style="width:100%"
                        v-model="type">

                    
                </div>


                  <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onAddCategory">
                                            Add Category
                                        </span>
                                    </span>
                                </span>
                            </div>

                </form>
                </col-sm-6>

                <div class="col-sm-3"></div>


            </div>


        </div>

    </main>
</template>

<script>
export default {
    
}
</script>