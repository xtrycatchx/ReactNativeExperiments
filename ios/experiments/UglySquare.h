//  Created by react-native-create-bridge

// import UIKit so you can subclass off UIView
#import <UIKit/UIKit.h>

@class RCTEventDispatcher;

@interface UglySquare : UIView

  @property (nonatomic, assign) NSString *batmanMessage;

  - (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
