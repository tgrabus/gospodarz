# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0006_auto_20150124_2250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='farmerproduct',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='products'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='product',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='products/original'),
            preserve_default=True,
        ),
    ]
