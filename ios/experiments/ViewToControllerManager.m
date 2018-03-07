//
//  ViewToControllerManager.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 6/3/18.
//
#import <Foundation/Foundation.h>
#import "ViewToController.h"
#import "ViewToControllerManager.h"

#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h”
#endif

@implementation ViewToControllerManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[ViewToController alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

RCT_EXPORT_VIEW_PROPERTY(batmanMessage, NSString)

- (NSDictionary *)constantsToExport
{
  return @{@"EXAMPLE": @"example"};
}

@end

