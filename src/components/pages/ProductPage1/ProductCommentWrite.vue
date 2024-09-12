<template>
<nav>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <router-link to="" class="link">Additional Info</router-link>
      </div>
      <div class="col-md-2">
        <router-link to="" class="link">Questions</router-link>
      </div>
      <div class="col-md-2">
        <router-link to="" class="link">Reviews</router-link>
      </div>
    </div>
    <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>
    <div>
      <h3 style="font-weight: 600; ">Customer Reviews</h3>
    </div>
    <div>
      <p style="margin: 0; display: inline-block">
        <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        <img src="../../../../images/Star Icon 2.svg" height="16" width="16"/>
      </p>
      <p style="display: inline-block; padding-left: 10px">11 Reviews</p>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-2">
        <p style="font-weight: 600">Tray Table</p>
      </div>
    </div>
    <div class="write-review">
      <div class="row">
        <div class="col-md-7 offset-md-1">
          <input type="text" class="form-control" v-model="commentWrite">
        </div>
        <div class="col-md-3 offset-md-1">
          <button type="submit" class="btn btn-dark write-btn" @click="addComment">Write Review</button>
        </div>
      </div>
    </div>
  </div>
</nav>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-2 mt-2">
        <img src="../../../../images/coment-1.jpg" height="72" />
      </div>
      <div class="col-md-10 mt-2">
        <h6 style="font-weight: 700">Sofia Harvetz</h6>
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <p>{{comment}}</p>
        <button class="btn" style="font-weight: 600">Like</button>
        <button class="btn" style="font-weight: 600">Reply</button>
      </div>

      <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>

      <div class="col-md-2 mt-2">
        <img src="../../../../images/comment-2.jpg" height="72"/>
      </div>
      <div class="col-md-10 mt-2">
        <h6 style="font-weight: 700">Nicolas Jensen</h6>
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <button class="btn" style="font-weight: 600">Like</button>
        <button class="btn" style="font-weight: 600">Reply</button>
      </div>

      <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>

      <div class="col-md-2 mt-2">
        <img src="../../../../images/comment-3.jpg" height="72"/>
      </div>
      <div class="col-md-10 mt-2">
        <h6 style="font-weight: 700">Nicolas Jensen</h6>
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <button class="btn" style="font-weight: 600">Like</button>
        <button class="btn" style="font-weight: 600">Reply</button>
      </div>

      <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>

      <div class="col-md-2 mt-2">
        <img src="../../../../images/comment-4.jpg" height="72"/>
      </div>
      <div class="col-md-10 mt-2">
        <h6 style="font-weight: 700">Nicolas Jensen</h6>
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <button class="btn" style="font-weight: 600">Like</button>
        <button class="btn" style="font-weight: 600">Reply</button>
      </div>

      <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>

      <div class="col-md-2 mt-2">
        <img src="../../../../images/comment-5.jpg" height="72"/>
      </div>
      <div class="col-md-10 mt-2">
        <h6 style="font-weight: 700">Nicolas Jensen</h6>
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.svg" height="16" width="16"/>
        </p>
        <p>
          I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
          quas molestias excepturi sint non provident.
        </p>
        <button class="btn" style="font-weight: 600">Like</button>
        <button class="btn" style="font-weight: 600">Reply</button>
      </div>

      <div style="width: 100%;height: 2px;background-color: #F3F5F7"></div>
    </div>
    <div class="row justify-content-center mt-4 mb-5">
      <div class="justify-content-center col-md-3">
        <button class="btn btn-load">Load more</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
const commentWrite = ref('')
const comment = ref('')
onMounted(() =>{
  const storedComment = localStorage.getItem('comment')
  if (storedComment) {
    comment.value = storedComment
  }
})
const addComment = function (){
 if(!commentWrite.value){
    alert('Inputda ma\'lumot yo\'q')
 }
 else {
   comment.value = commentWrite.value
   commentWrite.value = ''
   localStorage.setItem("comment",comment.value)
 }
}
</script>


<style scoped>
.link{
  text-decoration: none;
  position: relative;
}
.link::before{
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #121212;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.link:hover::before{
  transform: scaleX(1);
}
.write-review{
  width: 100%;
  height: 72px;
  border-radius: 10px;
  border: 2px solid #E8ECEF;
  text-align: center;
  align-content: center;
}
.write-btn{
  width: 90%;
  border-radius: 25px;
}
.btn-load{
  border: 2px solid #121212;
  border-radius: 20px;
  width: 80%;
  font-weight: 600;
  font-size: 18px;
}
</style>