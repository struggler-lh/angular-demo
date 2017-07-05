import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    onSubmit(formData, form){
        console.log('form.pristine:' + form.pristine);//没有填写数据
        console.log('form.dirty:' + form.dirty);//填写过数据
        console.log('form.valid:' + form.valid);//是否验证通过
        console.log(formData);
    }

}
