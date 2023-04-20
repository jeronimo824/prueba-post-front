<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>FOTO</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>REGISTRO</th>
              <th></th>
            </tr>
          </thead>
            <tbody class="table-group-divider" id="contenido">
              <tr v-if="this.cargando">
                <td colspan="6"><h3>Cargando</h3></td>
              </tr>
              <tr v-else v-for="usu, i in this.usuarios" :key="usu.id">
                <td v-text="(i)"></td>
                <td v-text="usu.id"></td>
                <td>
                  <img v-if="usu.foto" style="width: 150px !important;" :src="usu.foto" class="img-thumbnail" alt="">
                  <img v-else style="width: 150px !important;" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" class="img-thumbnail" alt="">
                </td>
                <td v-text="usu.nombre"></td>
                <td v-text="usu.apellido"></td>
                <td v-text="new Date(usu.created_at).toLocaleDateString('en-US')"></td>
                <td>
                  <router-link :to="{path:'view/'+usu.id}" class="btn btn-info">
                    <i class="fa-solid fa-eye"></i>
                  </router-link>
                  &nbsp;
                  <router-link :to="{path:'edit/'+usu.id}" class="btn btn-warning">
                    <i class="fa-solid fa-edit"></i>
                  </router-link>
                  &nbsp;
                  <button class="btn btn-danger" v-on:click="eliminar(usu.id,usu.nombre)">
                    <i class="fa-solid fa-edit"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {confirmar} from '../funciones'
  export default {
    data(){
      return{
        usuarios:null,
        cargando:false
      }
    },
    mounted(){
      this.getUsuarios();
    },
    methods:{
      getUsuarios(){
        this.cargando = true;
        axios.get('http://127.0.0.1:8000/api/v1/usuarios').then(
          res => {
            this.usuarios = res.data;
            this.cargando = false;
          }
        );
      },
      eliminar(id,nombre){
        confirmar('http://127.0.0.1:8000/api/v1/usuarios/',id,'Eliminar Registro','Desea eliminar a '+nombre+'?')
        this.cargando = false;
      }
    }
  }
</script>
