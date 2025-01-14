const os = require('os');
const path = require('path');

const fs = require('fs-extra');
const _ = require('lodash');

const log = require('../../utils/logger').child({ __filename });

class DeviceDriverBase {
  constructor({ client, emitter }) {
    this.client = client;
    this.emitter = emitter;
  }

  get name() {
    return 'UNSPECIFIED_DEVICE';
  }

  declareArtifactPlugins() {
    return {};
  }

  async acquireFreeDevice(deviceQuery) {
    return await Promise.resolve('');
  }

  async prepare() {
    return await Promise.resolve('');
  }

  async launchApp() {
    return await Promise.resolve(NaN);
  }

  async waitForAppLaunch() {
    return await Promise.resolve(NaN);
  }

  async takeScreenshot(deviceId, screenshotName) {
    return await Promise.resolve('');
  }

  async sendToHome() {
    return await Promise.resolve('');
  }

  async setBiometricEnrollment() {
    return await Promise.resolve('');
  }

  async matchFace() {
    return await Promise.resolve('');
  }

  async unmatchFace() {
    return await Promise.resolve('');
  }

  async matchFinger() {
    return await Promise.resolve('');
  }

  async unmatchFinger() {
    return await Promise.resolve('');
  }

  async shake() {
    return await Promise.resolve('');
  }

  async installApp(deviceId, binaryPath, testBinaryPath) {
    return await Promise.resolve('');
  }

  async uninstallApp() {
    return await Promise.resolve('');
  }

  installUtilBinaries() {
    return Promise.resolve('');
  }

  async deliverPayload(params) {
    return await this.client.deliverPayload(params);
  }

  async setLocation(lat, lon) {
    return await Promise.resolve('');
  }

  async reverseTcpPort() {
    return await Promise.resolve('');
  }

  async unreverseTcpPort() {
    return await Promise.resolve('');
  }

  async clearKeychain(_udid) {
    return await Promise.resolve('');
  }

  async waitUntilReady() {
    return await this.client.waitUntilReady();
  }

  async waitForActive() {
    return await Promise.resolve('');
  }

  async waitForBackground() {
    return await Promise.resolve('');
  }

  async reloadReactNative() {
    return await this.client.reloadReactNative();
  }

  createPayloadFile(notification) {
    const notificationFilePath = path.join(this.createRandomDirectory(), `payload.json`);
    fs.writeFileSync(notificationFilePath, JSON.stringify(notification, null, 2));
    return notificationFilePath;
  }

  async setPermissions(deviceId, bundleId, permissions) {
    return await Promise.resolve('');
  }

  async terminate(deviceId, bundleId) {
    return await Promise.resolve('');
  }

  async shutdown() {
    return await Promise.resolve('');
  }

  async setOrientation(deviceId, orientation) {
    return await Promise.resolve('');
  }

  async setURLBlacklist(urlList) {
    return await Promise.resolve('');
  }

  async enableSynchronization() {
    return await Promise.resolve('');
  }

  async disableSynchronization() {
    return await Promise.resolve('');
  }

  async resetContentAndSettings() {
    return await Promise.resolve('');
  }

  createRandomDirectory() {
    const randomDir = fs.mkdtempSync(path.join(os.tmpdir(), 'detoxrand-'));
    fs.ensureDirSync(randomDir);
    return randomDir;
  }

  cleanupRandomDirectory(fileOrDir) {
    if(path.basename(fileOrDir).startsWith('detoxrand-')) {
      fs.removeSync(fileOrDir);
    }
  }

  getBundleIdFromBinary(appPath) {

  }

  validateDeviceConfig(deviceConfig) {

  }

  getPlatform() {

  }

  async getUiDevice() {
    log.warn(`getUiDevice() is an android specific function, it exposes UiAutomator's UiDevice API (https://developer.android.com/reference/android/support/test/uiautomator/UiDevice) make sure you create an android specific test for this scenario`);
    return await Promise.resolve('');
  }

  async cleanup(deviceId, bundleId) {
    this.emitter.off(); // clean all listeners
  }

  getLogsPaths(deviceId) {
    return {
      stdout: undefined,
      stderr: undefined
    };
  }

  async pressBack() {
    log.warn('pressBack() is an android specific function, make sure you create an android specific test for this scenario');
    return await Promise.resolve('');
  }

  async typeText(deviceId, text) {
    return await Promise.resolve('');
  }

  async setStatusBar(deviceId, flags) {
  }

  async resetStatusBar(deviceId) {
  }

  async captureViewHierarchy() {
    return '';
  }
}

module.exports = DeviceDriverBase;
