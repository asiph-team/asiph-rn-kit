//
//  AsiphModuleModule.swift
//  AsiphModuleModule
//
//  Copyright © 2021 Diego Arrieta. All rights reserved.
//

import Foundation

@objc(AsiphModuleModule)
class AsiphModuleModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
