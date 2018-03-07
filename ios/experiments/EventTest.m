//
//  EventTest.m
//  ReactNativeExperiments
//
//  Created by Paul Sydney on 3/3/18.
//

#import "EventTest.h"

@implementation EventTest

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
}

@end
