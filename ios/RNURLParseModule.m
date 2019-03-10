#import "RNURLParseModule.h"

#if __has_include("RCTUtils.h")
#import "RCTUtils.h"
#else
#import <React/RCTUtils.h>
#endif

#import <Foundation/Foundation.h>

@implementation RNURLParseModule {
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(parse:(NSString *)urlSpec
                  parseWithResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSURL *url = [NSURL URLWithString:urlSpec];
  if (url == NULL) {
    NSDictionary *errorDic = @{
                               NSLocalizedDescriptionKey:@"Parse error",
                               NSLocalizedRecoverySuggestionErrorKey:@"Confirm parameter urlSpec."
                               };
    NSError *error = [[NSError alloc] initWithDomain:@"org.reactjs.native.example.URLParseSample.parse"
                                                code:-1 userInfo:errorDic];
    reject(@"Parse error", @"Parse error", error);
  } else {
    NSDictionary *info = @{
                           @"protocol": [url scheme],
                           @"host": [url host],
                           @"port": [url port],
                           @"path": [url path],
                           @"query": [url query],
                           @"ref": [url fragment]
                           };
    resolve(info);
  }
}
@end
