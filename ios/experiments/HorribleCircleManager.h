//
//  HorribleCircleManager.h
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 3/3/18.
//
#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#elif __has_include(“RCTViewManager.h”)
#import “RCTViewManager.h”
#else
#import “React/RCTViewManager.h”
#endif

@interface HorribleCircleManager : RCTViewManager
@end
