<template>
<main>
  <div class="a-spacing-large">

   <div class="container-fluid browsing-history">
     <div class="row">
       <div class="col-sm-8 col-8">
         <h1 class="a-size-large a-spacing-none a-text-normal">
           All products
         </h1>
          <div class="a-spacing-large"> </div>
          <!-- buttons -->
          <nuxt-link  class="a-button-buy-again" to="/products"> Add a new product </nuxt-link>
           <nuxt-link  class="a-button-history margin-right-10" to="/category"> Add a new category </nuxt-link>
            <nuxt-link  class="a-button-history margin-right-10" to="/owner"> Add a new owner </nuxt-link>
            
         <!-- listings page -->
       </div>

     </div>
   </div>
  </div>
 
   <div class="a-spacing-large"> </div> 

   <div class="container-fluid browsing-history">
    <div v-for ="(product,index) in products" :key="product._id"  class="row">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 br bb">
      <div class="history-box">
        <!-- product image -->
        <a href="
        #" class="a-link-normal">
         <img :src="product.photo" class="img-fluid"/>
        </a>

      <!-- product title -->
        <div class="a-spacing-top-base asin-title">
          <span class="a-text-normal">
            <div class="p13n-sc-truncated">{{product.title}}</div>
          </span>
        </div>
          <!-- product rating -->
        <div class="a-row">
          <a href="
          #">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"> </i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          </a>
          <span class="a-letter-space">

          </span>
           <span class="a-color-tertiary a-size-small asin-reviews">
            (1732)
          </span>
        </div>
        <!-- product price  -->
        <div class="a-row">
         <span class="a-size-base a-color-price">
           <span class="p13n-sc-price">
             ${{product.price}}
           </span>
         </span>
        </div>
      </div>

       <!-- product button -->

       <div class="a-row">
       <nuxt-link :to="`/products/${product._id}`" class="a-button-history margin-right-10">Update</nuxt-link>

        <a href="#" class="a-button-history margin-right-10" @click="onDeleteProduct(product._id,index)">Delete</a>
       </div>
       </div>
      
      
      </div>
    </div>
   
</main>
 
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {

//asyncData is fetching before nuxt page is loading on

// is good for seo because the data would be loaded first

   async asyncData({$axios}) {

   try{
     let response = await $axios.$get("http://localhost:8000/api/products")


      console.log(response,"data")
     return{
       products:response.products
     }
   }

catch(err){


  }
 

  },


  methods:{

   async  onDeleteProduct(id,index){

  try {
     let response = await this.$axios.$delete(`http://localhost:8000/api/products/${id}`)

     if(response.status){


       console.log("deleted")
       this.products.splice(index,1)
     }


  }

   catch(err){


     console.log(err.message);
   }
   }



  }

  
}
</script>

<style>

</style>
