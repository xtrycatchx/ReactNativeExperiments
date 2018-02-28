//
//  PromiseExperiment.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 28/2/18.
//

#import "PromiseExperiment.h"
#import <React/RCTLog.h>

@implementation PromiseExperiment

// export the module
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(promiseWillResolve:
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"INSIDE TEST promiseWillResolve");
  resolve(nil);
}

RCT_EXPORT_METHOD(promiseWillResolveWithParams: (NSString *)params
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"INSIDE TEST promiseWillResolveWithParams");
  NSArray *array = [NSArray arrayWithObjects:params, nil];
  resolve(array);
}

RCT_EXPORT_METHOD(promiseWillReject:
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"INSIDE TEST promiseWillResolve");
  NSError *error = [NSError errorWithDomain:@"some_domain" code:100 userInfo:@{ NSLocalizedDescriptionKey:@"Something went wrong" }];
  reject(@"probs", @"Expected error in xcode", error);
}

/**onPressPromiseWillResolveButton = () => this.executePromise(PromiseExperiment.promiseWillResolve())

onPressPromiseWillResolveWithParamsButton = () => this.executePromise(PromiseExperiment.promiseWillResolveWithParams(new Date().toString()));

onPressPromiseWillRejectButton = () => this.executePromise(PromiseExperiment.promiseWillReject())**/

@end
