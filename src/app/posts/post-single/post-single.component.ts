import { Component, OnInit, ElementRef } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { FacebookService, InitParams } from 'ngx-facebook';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2TweetService } from 'ng2-tweet/lib/index'




@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ]),

    trigger('heroState2', [
    state('inactive', style({transform: 'translateX(0)'})),
    state('active',   style({transform: 'translateX(-100%) '})),
    
    transition('inactive => active', animate('400ms ease-in')),
    transition('active => inactive', animate('200ms ease-out')),
    ])
  ],
  providers: [PostsService]
})

export class PostSingleComponent implements OnInit  {

	  post: Post;
    post_related: Post;
    private future: Date;
    private futureString: string;
    private diff: number;
    private dias: string;
    private horas_minutos: string;



 
  show = false; 
  show2 = false; 
  posts_Home: Post[];
  posts: Post[];
  posts_related: Post[];
  repoUrl:any;
  slugArray: any;
  TweetTitulo: any;



  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  categoria:any;
  current_id:any;
  tam_bloque: any;
  tam_bloque_visible: boolean;
  tam_bloqueC_visible: boolean;
  imageX:any;
  loadMoreVisible : boolean;
  selectedClass: number;
  twitterID_1: string;
  showTwiiter_1 : boolean;

  twitterID_2: string;
  showTwiiter_2 : boolean;

  twitterID_3: string;
  showTwiiter_3 : boolean;

  twitterID_4: string;
  showTwiiter_4 : boolean;
  repoUrlWA: any;
  reloadState:any;

 
 constructor(private postsService: PostsService,  private router: Router,  private route: ActivatedRoute, private sanitizer: DomSanitizer, private fb: FacebookService, private ng2TwwetService: Ng2TweetService,  elm: ElementRef ) { 
   this.arregloCountCat = [];
    this.loadMoreVisible = false;
    this.futureString = "July 1, 2018 00:00:00";
    this.post_count = 20;
    this.tam_bloque_visible = false;
    this.tam_bloqueC_visible = true;
    this.showTwiiter_1 = false;
    this.showTwiiter_2 = false;
    this.showTwiiter_3 = false;
    this.showTwiiter_4 = false;
  
  }


 



  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
        console.log("Post", this.post)
         this.categoria = res[0].categories;
         this.current_id = res[0].id;
         this.slugArray = res[0].slug;
         this.TweetTitulo = res[0].title.rendered;
         this.tam_bloque = res[0].tamano_bloque;
         this.twitterID_1 = res[0].post_twitter_1;
         this.twitterID_2 = res[0].post_twitter_2;
         this.twitterID_3 = res[0].post_twitter_3;
         this.twitterID_4 = res[0].post_twitter_4;
         console.log("CATEGORIA", this.categoria);
         console.log("CURRENT ID", this.current_id);
         console.log("TAMAÑO BLOQUE", this.tam_bloque);
         console.log("TWITTER CORDE", this.twitterID_1);
         this.getPostRelated(this.categoria, this.current_id);
         this.repoUrl = 'http://oaxacatrespuntocero.com/'+this.slugArray;
         this.repoUrlWA = 'whatsapp://send?text='+this.repoUrl;

         this.reloadState = this.route.snapshot.queryParamMap.get("refresh");
         
        if(this.reloadState === "1"){
            console.log("Reloaded Page OK", this.reloadState);
            this.router.navigate([slug], { queryParams:{refresh:"0"} }); 
            setTimeout(()=>{ window.location.reload(); }, 800); 
        }
        
        else{
            console.log("Reloaded Page NO", this.reloadState);      
        }



         if(this.tam_bloque != "" ){
          this.tam_bloque_visible = true;
           this.tam_bloqueC_visible = false;
          console.log("this.tam_bloque_visible ", this.tam_bloque_visible );


        } else{
           this.tam_bloque_visible = false;
           this.tam_bloqueC_visible = true;
          console.log("this.tam_bloque_visible ", this.tam_bloque_visible );
        }
   
         //Twitter show
        if( this.twitterID_1 != "" ){
          this.showTwiiter_1 = true;
        }

        if( this.twitterID_2 != "" ){
          this.showTwiiter_2 = true;
        }

        if( this.twitterID_3 != "" ){
          this.showTwiiter_3 = true;
        }

        if( this.twitterID_4 != "" ){
          this.showTwiiter_4 = true;
        }



      });
  }

  getPostRelated(cat, current_id){
    this.postsService
      .getPostsRelated(cat, current_id)
      .subscribe(res => {
        this.posts_related = res;
        console.log(this.posts_related)
         //this.imageX = this.sanitizer.bypassSecurityTrustStyle(`url(${element.image})`);
      });
  }



  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug);
         //window.location.reload();
         window.scrollTo(0, 0);

    });         

  }

  
   
  


  //ANIMACION TOGGLE
    get stateName() {
        return this.show ? 'show' : 'hide'
     }

  toggle() {
        this.show = !this.show;
    }


    //ANIMACIÓN PARA EL MENU
    get stateName2() {
        return this.show2 ? 'inactive' : 'active'
    }

    toggle2() {
        this.show2 = !this.show2;
         console.log("this.show", this.show2)
    }


    sanitize(url:string){
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }


  ngAfterViewInit() {

    
 //setTimeout(() => { try { (window["adsbygoogle"] = window["adsbygoogle"] || []).push({}); } catch (e) { console.error(e);} }, 2000);

   console.log("estoy  en ngAfterViewInit")
   setTimeout(() => { 
     this.toggle()
   }, 300); // Or however long you need the delay to be
  

  }

  GoToInicio() {
     this.router.navigate([""]);
    console.log("Go to Inicio")
  }


  SeleccionMenu(slug:string ) {
     this.router.navigate(["publicaciones-"+slug]);
  }


   getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}

  selectPost(slug) {
   this.router.navigate([slug], { queryParams:{refresh:"1"} });   
   console.log("Slug normal", slug);
  }



}
