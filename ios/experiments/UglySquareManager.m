//  Created by react-native-create-bridge

#import <Foundation/Foundation.h>
#import "UglySquare.h"
#import "UglySquareManager.h"

#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h”
#endif

@implementation UglySquareManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[UglySquare alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

RCT_EXPORT_VIEW_PROPERTY(batmanMessage, NSString)

- (NSDictionary *)constantsToExport
{
  return @{@"EXAMPLE": @"example"};
}

@end
