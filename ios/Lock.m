//
//  Lock.m
//  ThirdSpace
//
//  Created by Hari Gadiraju on 9/4/20.
//

#import "Lock.h"
#import "React/RCTLog.h"
#import <TTLock/TTLock.h>

@implementation Lock
RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(init,resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  [TTLock setupBluetooth:^(TTBluetoothState state) {
  RCTLogInfo(@"##############  TTLock is working, bluetooth state: %ld  ##############",(long)state);
    resolve(@"BlueTooth Checked");
  }];
}


RCT_REMAP_METHOD(unlock,lockData:(NSString *)lockData resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(lockData);
        /*[TTLock controlLockWithControlAction:TTControlActionUnlock lockData:lockData success:^{
             NSLog(@"##############  Unlock success  ##############");
         } failure:^(TTError errorCode, NSString *errorMsg) {
              NSLog(@"##############  error: %@  ##############",errorMsg);
     }];*/
      
      [TTLock controlLockWithControlAction:TTControlActionUnlock lockData:lockData success:^(long long lockTime, NSInteger electricQuantity, long long uniqueId) {
                RCTLogInfo(@"##############  Unlock successed power: %ld  ##############",(long)electricQuantity);
                resolve(@"yay");
            } failure:^(TTError errorCode, NSString *errorMsg) {
               resolve(errorMsg);
                //NSError *error = [NSError errorWithDomain:@"world" code:errorCode userInfo:errorMsg];
               // reject(@"get_error", @"Error getting system volume",error);
                RCTLogInfo(@"##############  Unlock failed errorMsg: %@  ##############",errorMsg);
         }];
}

@end
