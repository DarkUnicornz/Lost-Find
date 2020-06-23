import 'package:lost_and_find_mobile/routes/routes_handler.dart';
import 'package:fluro/fluro.dart';

class Routes{
  static const splash = '/';
  static const auth = '/auth';

  static void configureRouter(Router router){
    // router.define(splash, 
    //   handler: splashHandler, transitionType: TransitionType.native);

    router.define(auth, 
      handler: authHandler, transitionType: TransitionType.native);
  }
}