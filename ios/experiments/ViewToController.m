//
//  ViewToController.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 6/3/18.
//
#import <Foundation/Foundation.h>
#import "ViewToController.h"
#import "SampleViewController.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation ViewToController : UIView
{
  RCTEventDispatcher *_eventDispatcher;
}

-(void)didMoveToWindow
{
  [super didMoveToWindow];
  if( self.window) {
    // TODO
    
    SampleViewController *sampleViewController = [[SampleViewController alloc] initWithNibName:@"SampleViewController" bundle:nil];
    [sampleViewController set_eventDispatcher:_eventDispatcher];
    [self.window.rootViewController presentViewController:sampleViewController animated:NO completion:^{
      NSLog(@"Done");
      //self.window.rootViewController.reactview.appProperties = @{@"status": @"DONE"};
      //[self sendEventWithName:@"sayHello" body:@"Hello"];
      
      [_eventDispatcher sendAppEventWithName:@"onLoaded" body:@{@"name": @"onStop"}];
      
      
      
    }];
    
    // end of TODO
  }
}



- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init]))
  {
    _eventDispatcher = eventDispatcher;
  }
  return self;
}

- (void)setBatmanMessage:(NSString *)batmanMessage
{
  if(![batmanMessage isEqual:_batmanMessage])
  {
  }
}

@end
