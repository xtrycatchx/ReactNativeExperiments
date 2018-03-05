//
//  SampleViewController.h
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 5/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTEventDispatcher.h>

@interface SampleViewController : UIViewController

@property (weak, nonatomic) IBOutlet UIButton *camera;
@property (strong, nonatomic) RCTEventDispatcher *_eventDispatcher;

@end
