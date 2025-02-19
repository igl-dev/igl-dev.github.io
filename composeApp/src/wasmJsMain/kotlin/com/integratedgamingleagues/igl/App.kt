package com.integratedgamingleagues.igl

import androidx.compose.foundation.clickable
import androidx.compose.foundation.Image
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.resources.painterResource
import igl_landing_page.composeapp.generated.resources.Res
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextLinkStyles
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.withLink
import igl_landing_page.composeapp.generated.resources.IGL_Logo_Final_Outline_Email

class Social(
    val name: String,
    val tag: String,
    val link: String
)

private val socials = listOf(
    Social(
        "Instagram",
        "@IGL_esportsleagues",
        "https://www.instagram.com/igl_esportsleagues/"
    ),
    Social(
        "TikTok",
        "@IGL_esportsleagues",
        "http://tiktok.com/@igl_esportsleagues"
    ),
    Social(
        "Twitter",
        "IGL_Esports",
        "https://x.com/IGL_Esports"
    ),
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun App() {
    AppTheme {
        Scaffold(
            modifier = Modifier.fillMaxSize(),
            topBar = {
                TopAppBar(
                    colors = TopAppBarDefaults.topAppBarColors().copy(containerColor = MaterialTheme.colorScheme.primaryContainer),
                    title = {
                        Box(modifier = Modifier.fillMaxWidth()) {
                            Text(
                                modifier = Modifier.align(Alignment.Center),
                                text = "IGL",
                                style = MaterialTheme.typography.headlineMedium,
                            )
                        }
                    }
                )
            }
        ) { padding ->
            Column(
                modifier = Modifier
                    .padding(padding)
                    .fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {

                Image(
                    painter = painterResource(Res.drawable.IGL_Logo_Final_Outline_Email),
                    contentDescription = "Logo",
                    modifier = Modifier.size(300.dp).padding(16.dp)
                )
                Text(
                    text = "Coming Soon",
                    style = MaterialTheme.typography.headlineLarge,
                    modifier = Modifier.padding(16.dp)
                )

                Spacer(Modifier.height(100.dp))
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(2.dp)
                ) {
                    Text(
                        "Socials",
                        style = MaterialTheme.typography.headlineMedium,
                        modifier = Modifier.padding(16.dp)
                    )
                    for (social in socials) {
                        SocialLink(social)
                    }
                }
            }
        }
    }
}

@Composable
private fun SocialLink(
    social: Social
) {
    val uriHandler = LocalUriHandler.current
    Row(
        modifier = Modifier.padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = social.name.plus(" :"),
            style = MaterialTheme.typography.titleMedium
        )
        Text(
            buildAnnotatedString {
                withLink(
                    LinkAnnotation.Clickable(
                        tag = "clickable",
                        styles = TextLinkStyles(
                            style = SpanStyle(
                                textDecoration = TextDecoration.Underline,
                                color = MaterialTheme.colorScheme.primary
                            ),
                        )
                    ) {
                        // log some metrics
                        uriHandler.openUri(social.link)
                    }
                ) {
                    append(social.tag)
                }
            }
        )
    }
}

@Composable
private fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable() () -> Unit
) {
    val colorScheme = when {
        darkTheme -> darkScheme
        else -> lightScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}