package com.urlparsesample.extension;

import java.net.URL;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import java.util.HashMap;
import java.util.Map;

// package private class
class RNURLParseModule extends ReactContextBaseJavaModule {
    private static final String E_URL_PARSE_ERROR = "URL Parse error";

    RNURLParseModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "RNURLParseModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("IsAndroid", true);
        return constants;
    }

    @ReactMethod
    public void parse(final String urlSpec, Promise promise) {
        WritableMap info = Arguments.createMap();
        try {
            URL url = new URL(urlSpec);
            info.putString("protocol", url.getProtocol());
            info.putString("host", url.getHost());
            info.putString("path", url.getPath());
            info.putInt("port", url.getPort());
            info.putString("query", url.getQuery());
            info.putString("ref", url.getRef());
            promise.resolve(info);
        } catch (Exception e) {
            promise.reject(E_URL_PARSE_ERROR, e);
        }
    }
}
