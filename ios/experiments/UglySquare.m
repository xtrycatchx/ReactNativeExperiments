//
//  UglySquare.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 2/3/18.
//

#import <UIKit/UIKit.h>

@class RCTEventDispatcher;

@interface UglySquare : UIView

  // view property with @property
  @property(nonatomic, assign) NSString *exampleProp;

  // init event dispatcher that allows us to talk communicate with JS
- (instancetype) initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end

