import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';
import { NotificationService } from 'app/_services/_notification';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
  focus;
  focus1;
  focus2;

    userForm : FormGroup;
	submitted: Boolean ;
	isLoading: boolean;
    test : Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    nativeElement: any
    element: any;
    componentStatusSub: any;
   
    btnButton: { label: string; method: string; };

    constructor(private formBuilder: FormBuilder, private pagesService: PagesService, private router: Router,private notificationService: NotificationService) {
		
	}  
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();

       

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.submitted = false;

		this.userForm = this.formBuilder.group({
			name  : new FormControl(null, Validators.required),
			email  : new FormControl(null, Validators.email),
			phone  : new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
		   password: new FormControl('',Validators.required)
		});
    }
    get userControl() {
		return this.userForm.controls;
	}

	onCreate(): void {
		this.componentStatusSub = this.pagesService.getComponentStatusListener()
		.subscribe(
			componentStatus => {
			this.isLoading = false;
		});
				
		if(this.userForm.invalid){ 
			this.submitted =true;
			return;
		} else {
			this.isLoading = true;
			this.pagesService.createUser(this.userForm.value)
			.then(user_res => {
				this.isLoading = false;
				this.ngOnInit();			
			})
			.catch(err => {
				this.isLoading = false;
				console.log(err);
			});
		}
	}
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
