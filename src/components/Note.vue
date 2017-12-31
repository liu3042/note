<template>
  <div class="note">
    <header>
    <h4>{{header}}</h4>
    <li>{{date}}</li>
    </header>
    <main>
      <article>
        <quill-editor ref="myQuillEditor" :content="content"  :options="editorOption"  @change="onEditorChange($event)"></quill-editor>
      </article>
      <button @click="addNote">addNote</button>
      <button @click="show">show</button>
      <button @click="saveNote">saveNote</button>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueQuillEditor from 'vue-quill-editor'
  Vue.use(VueQuillEditor);
  export default {
    name: 'note',
    data(){
      return {
        header:"",
        date:"",
        content:"",
        editorOption:{}
      }
    },
    // get the current quill instace object.
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods:{
     onEditorChange({ editor, html }) {
      this.content = html
    },
    addNote(editor){
      let myDate = new Date();
      this.content = '<h>input your newNote here';
      this.date = myDate.toLocaleString();
  },
  show(){
    console.log(this.content);
  },
  saveNote(){
    const myNote = {
      date:this.date,
      content:this.content
  };
  console.log(myNote);
  axios({
    method:'post',
    url:'/saveNote',
    data:myNote
  }).then(function(response){
    alert(response.data);
  }).catch(function(response){
    console.log(response);
  });


  }
  }

    }
  </script>


  <style scoped>
  </style>
