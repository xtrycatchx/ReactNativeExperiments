//
//  HorribleCircle.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 3/3/18.
//

#import <Foundation/Foundation.h>
#import "HorribleCircle.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation HorribleCircle : UIView  {
  
  RCTEventDispatcher *_eventDispatcher;
  UIView *_childView;
  
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    _eventDispatcher = eventDispatcher;
    
    _childView = [[UIView alloc] initWithFrame:CGRectMake(10,20,100,100)];
    _childView.alpha = 0.5;
    _childView.layer.cornerRadius = 50;
    _childView.backgroundColor = [UIColor redColor];
  }
  
  return self;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  _childView.frame = self.bounds;
  [self addSubview:_childView];
  
}

- (void)setBatmanMessage:(NSString *)batmanMessage
{
  if(![batmanMessage isEqual:_batmanMessage])
  {
    _batmanMessage = [batmanMessage copy];
    [self addTextView: _batmanMessage];
  }
}

- (void)addTextView:(NSString *) text
{
  UILabel *textLabel = [[UILabel alloc] initWithFrame:CGRectMake(0,0,100,100)];
  textLabel.text = text;
  textLabel.textColor = [UIColor whiteColor];
  [textLabel sizeToFit];
  [_childView addSubview:textLabel];
  [_childView setNeedsDisplay];
  
}

@end
