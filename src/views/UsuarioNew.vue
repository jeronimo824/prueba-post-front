<template>
    <div class="row mt-3 ">
        <div class="col-md-6 offeset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar posts
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                            <img v-else height="100" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png" id="fotoimg" class="img-thumbnail" alt="">

                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su post" required class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="apellido" id="apellido" placeholder="Ingrese su nombre" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input v-on:change="previsualizarFoto" type="file" accept="image/png, image/jpeg, image/gif" class="form-control">
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>Registar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  <script>
    
    import { mostrarAlerta, enviarSolicitud } from '../funciones'

    export default{
        data(){
            return{
                nombre:'',
                apellido:'',
                foto:'',
                url:'http://127.0.0.1:8000/api/v1/usuarios',
                cargando:false
            }
        },
        methods:{
            guardar(){
                event.preventDefault();
                var miFoto = document.getElementById('fotoimg')
                this.foto = miFoto.src;

                if(this.nombre.trim()===''){
                    mostrarAlerta('Ingrese un nombre','warning','nombre')
                }else if(this.apellido.trim()===''){
                    mostrarAlerta('Ingrese un apellido','warning','apellido')
                }else{
                    var parametros = {nombre:this.nombre.trim(),apellido:this.apellido.trim(),foto:this.foto.trim()}
                    enviarSolicitud('POST',parametros,this.url,'POST REGISTRADO')
                }
                 
            },
            previsualizarFoto(event){
                var reader = new FileReader()
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = function(){
                    var miFoto = document.getElementById('fotoimg')
                    miFoto.src = reader.result;
                    this.foto = miFoto.src;
                }

            }
        }
    }
  </script>


  