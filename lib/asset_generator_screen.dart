import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'platform_view_helper.dart';

class AssetGeneratorScreen extends StatefulWidget {
  const AssetGeneratorScreen({super.key});

  @override
  State<AssetGeneratorScreen> createState() => _AssetGeneratorScreenState();
}

class _AssetGeneratorScreenState extends State<AssetGeneratorScreen> {
  WebViewController? _controller;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      registerWebPlatformView('asset-generator-view', 'asset_generator.html');
      _isLoading = false;
    } else {
      try {
        _controller = WebViewController()
          ..setJavaScriptMode(JavaScriptMode.unrestricted)
          ..setBackgroundColor(const Color(0xFF030712))
          ..setNavigationDelegate(
            NavigationDelegate(
              onPageFinished: (String url) {
                if (mounted) {
                  setState(() => _isLoading = false);
                }
              },
            ),
          )
          ..loadFlutterAsset('assets/web_app/index.html');
      } catch (_) {
        // Fallback in test/unsupported environments
        _isLoading = false;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: SafeArea(
        child: Stack(
          children: [
            if (kIsWeb)
              buildWebPlatformView('asset-generator-view')
            else if (_controller != null)
              WebViewWidget(controller: _controller!),
            if (_isLoading)
              const Center(
                child: CircularProgressIndicator(
                  color: Color(0xFF4F46E5),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
