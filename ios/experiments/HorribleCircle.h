//
//  HorribleCircle.h
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 3/3/18.
//

#ifndef HorribleCircle_h
#define HorribleCircle_h
#import <UIKit/UIKit.h>
#endif /* HorribleCircle_h */



@class RCTEventDispatcher;

@interface HorribleCircle : UIView
// Define view properties here with @property
@property (nonatomic, assign) NSString *batmanMessage;

// Initializing with the event dispatcher allows us to communicate with JS
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
