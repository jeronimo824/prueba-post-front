<template>
    <div class="row mt-3 ">
        <div class="col-md-6 offeset-md-3 center">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar posts
                </div>
                <div class="card-body">
                    <form>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                            <img v-else height="100" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" class="img-thumbnail" alt="">

                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su post" class="form-control">
                        </div>
                    </form>
                </div>
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

  