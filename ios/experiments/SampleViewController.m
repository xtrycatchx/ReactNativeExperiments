//
//  SampleViewController.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 5/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "SampleViewController.h"

@interface SampleViewController ()
@property (weak, nonatomic) IBOutlet UIButton *button;

@end

@implementation SampleViewController

@synthesize _eventDispatcher;

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)clickExit:(id)sender {
    [self dismissViewControllerAnimated:NO completion:^{
        //kill this native view
    }];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
