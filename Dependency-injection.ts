class UserService {

  sayHi() {
    console.log('Hi');
  }
}
    
class Injector {
private _container = new Map();

	constructor(private _providers: any[] = []) {
  	//this._providers.forEach(service => this._container.set(service, new service()));
    this._providers.forEach(function(service) {
    this._container.set(service, new service());
    // code
}.bind(this));
  }
  
  get(service: any) {
  	const serviceInstance = this._container.get(service);
    if(!serviceInstance) {
    	Throw Error('No Provider!')
    }
    return serviceInstance;
  }
}

class Component {
	
  constructor(private user: UserService) {
  }
}
    

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.user.sayHi();

