//
//  HorribleCircle.h
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 3/3/18.
//

#ifndef HorribleCircle_h
#define HorribleCircle_h
#import <UIKit/UIKit.h>
#endif

@class RCTEventDispatcher;

@interface HorribleCircle : UIView
@property (nonatomic, assign) NSString *batmanMessage;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
