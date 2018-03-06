//
//  ViewToController.h
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 6/3/18.
//
#import <UIKit/UIKit.h>

@class RCTEventDispatcher;

@interface ViewToController : UIView

@property (nonatomic, assign) NSString *batmanMessage;

// Initializing with the event dispatcher allows us to communicate with JS
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
